import { Routes } from '@angular/router';

export const MAIN_ROUTES: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../../pages/pages.module').then((m) => m.PagesModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('../../auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '404',
    loadChildren: () =>
      import('../../pages/public/notfound/notfound-page.module').then(
        (m) => m.NotFoundPageModule
      ),
  },
  {
    path: '**',
    redirectTo: '404',
  },
];
