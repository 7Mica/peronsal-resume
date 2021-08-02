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
import { catchError, map } from 'rxjs/operators';

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
    return this.accountService.validateCurrentSession().pipe(
      map((isSignedIn) => {
        // If user is signed in and navigates to login page, it redirects to /
        if (isSignedIn && state.url === '/auth/sign-in') {
          this.router.navigate(['/']);
          return false;
        }

        // If user is not signed in and navigates to login page, it can pass
        if (!isSignedIn && state.url === '/auth/sign-in') {
          return true;
        }

        // User can enter to any other pages depending if it is signed in or not
        return isSignedIn;
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
