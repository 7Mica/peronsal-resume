import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { GraphQLClients } from '@core/enums/graphql-clients.enum';
import {
  ACCOUNT_INFORMATION,
  IS_SIGNEDIN,
  SIGN_IN,
} from '@core/graphql/queries/account.queries';
import { AccountInformation } from '@core/interfaces/account-information.interface';
import { SignedStatus } from '@core/interfaces/signed-status.interface';
import { Apollo, ApolloBase } from 'apollo-angular';
import { BehaviorSubject, EMPTY, Observable, of } from 'rxjs';
import { catchError, concatMap, map, tap } from 'rxjs/operators';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private signedInStatusSource: BehaviorSubject<SignedStatus> =
    new BehaviorSubject<SignedStatus>({ isSignedIn: false });

  private accountInformationSource: BehaviorSubject<AccountInformation | null> =
    new BehaviorSubject<AccountInformation | null>(null);

  private apolloBase: ApolloBase;

  constructor(
    private apolloProvider: Apollo,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {
    this.apolloBase = this.apolloProvider.use(GraphQLClients.MAIN);
  }

  public observeSignedInStatus(): Observable<SignedStatus> {
    return this.signedInStatusSource.asObservable();
  }

  public observeAccountInformation(): Observable<AccountInformation | null> {
    return this.accountInformationSource.asObservable();
  }

  /**
   * @description
   * Validates user's session in the server. It notifies to `signedInStatusSource`
   * if the user is signed in/out.
   *
   * @returns Observable<boolean>
   */
  public validateCurrentSession(): Observable<boolean> {
    return this.apolloBase.mutate({ mutation: IS_SIGNEDIN }).pipe(
      map(({ data, error }: any) =>
        data
          ? data.isSignedIn
          : error.graphQLErrors.some((e: any) => e.statusCode === 401)
      ),
      // If the user is signed in/out, this will notify the status
      // to signedInStatusSource
      tap((isSignedIn: boolean) =>
        this.signedInStatusSource.next({ isSignedIn })
      ),
      // Get account information if user is signed in otherwise return a
      // completed observable (EMPTY)
      concatMap((isSignedIn: boolean) =>
        isSignedIn
          ? this.getAccountInformation().pipe(map(() => isSignedIn))
          : EMPTY
      ),
      catchError(() => {
        this.signedInStatusSource.next({ isSignedIn: false });
        return of(false);
      })
    );
  }

  public getAccountInformation(): Observable<any> {
    return this.apolloBase.query({ query: ACCOUNT_INFORMATION }).pipe(
      tap(({ data }: any) => {
        if (data) {
          this.accountInformationSource.next({
            email: data.getAccountDetails.email,
          });
        }
      })
    );
  }

  public signIn(email: string, password: string): Observable<any> {
    return this.apolloBase
      .mutate({
        mutation: SIGN_IN,
        variables: {
          email,
          password,
        },
      })
      .pipe(
        tap((e) => this.saveTokenIfNoErrors(e)),
        concatMap(({ data }) => (data ? this.getAccountInformation() : EMPTY))
      );
  }

  public signOut(): void {
    this.localStorageService.removeValue('ytkn');
    this.signedInStatusSource.next({ isSignedIn: false });
    this.accountInformationSource.next(null);
    this.router.navigate(['/']);
  }

  public getAccountToken(): string {
    return this.localStorageService.getValue('ytkn');
  }

  protected saveTokenIfNoErrors({ data }: any): void {
    const { signIn } = data;
    if (signIn) {
      this.localStorageService.setValue('ytkn', signIn.accessToken);
      this.signedInStatusSource.next({ isSignedIn: true });
    } else {
      this.signedInStatusSource.next({ isSignedIn: false });
    }
  }
}
