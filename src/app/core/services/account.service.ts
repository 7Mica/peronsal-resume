import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  ACCOUNT_INFORMATION,
  IS_SIGNEDIN,
  SIGN_IN,
} from '@core/graphql/queries/account.queries';
import { Apollo, QueryRef } from 'apollo-angular';
import { EMPTY, Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  public accountInformationFetch: QueryRef<any> | any;

  constructor(
    private apollo: Apollo,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  public closeSession(): void {
    this.localStorageService.removeValue('ytkn');
    this.accountInformationFetch.refetch();
    this.router.navigate(['/']);
  }

  public getAccountInformation(): Observable<any> {
    this.accountInformationFetch = this.apollo.watchQuery({
      query: ACCOUNT_INFORMATION,
    });

    return this.accountInformationFetch.valueChanges.pipe(
      map(({ data: { getAccountDetails } }: any) => getAccountDetails),
      catchError((error: any) => {
        if (error.graphQLErrors.some((e: any) => e.statusCode === 401)) {
          return of(null);
        } else {
          return EMPTY;
        }
      })
    );
  }

  public getAccountToken(): string {
    return this.localStorageService.getValue('ytkn');
  }

  public isSignedIn(): Observable<boolean> {
    return this.apollo
      .mutate({ mutation: IS_SIGNEDIN })
      .pipe(
        map(({ data, error }: any) =>
          data
            ? data.isSignedIn
            : error.graphQLErrors.some((e: any) => e.statusCode === 401)
        )
      );
  }

  public signIn(email: string, password: string): Observable<any> {
    return this.apollo
      .mutate({
        mutation: SIGN_IN,
        variables: {
          email,
          password,
        },
      })
      .pipe(tap((e) => this.saveTokenIfNoErrors(e)));
  }

  protected saveTokenIfNoErrors({ data }: any): void {
    const { signIn } = data;

    if (signIn) {
      this.localStorageService.setValue('ytkn', signIn.accessToken);
    }
  }
}
