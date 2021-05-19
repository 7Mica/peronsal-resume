import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { AccountService } from '@core/services/account.service';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SessionGuard implements CanActivate {
  constructor(private accountService: AccountService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    return this.accountService.isSignedIn().pipe(
      tap((e) => {
        if (e && state.url === '/auth/sign-in') {
          this.router.navigate(['/']);
        }
      }),
      catchError((error) => {
        if (
          error.graphQLErrors.some((e: any) => e.statusCode === 401) &&
          state.url === '/auth/sign-in'
        ) {
          return of(true);
        } else {
          this.router.navigate(['/']);
          return of(false);
        }
      })
    );
  }
}
