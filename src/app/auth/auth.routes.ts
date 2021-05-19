import { Routes } from '@angular/router';
import { SessionGuard } from './guards/session.guard';

export const AUTH_ROUTES: Routes = [
  {
    path: '',
    children: [
      {
        path: 'sign-in',
        canActivate: [SessionGuard],
        loadChildren: () =>
          import('./sign-in/sign-in.module').then((m) => m.SignInModule),
      },
    ],
  },
];
