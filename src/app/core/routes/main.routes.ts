import { Routes } from '@angular/router';

export const MAIN_ROUTES: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../../pages/main/main-page.module').then((m) => m.MainPageModule),
  },
  {
    path: 'playground',
    loadChildren: () =>
      import('../../pages/playground/playground.module').then(
        (m) => m.PlaygroundModule
      ),
  },
  {
    path: '404',
    loadChildren: () =>
      import('../../pages/notfound/notfound-page.module').then(
        (m) => m.NotFoundPageModule
      ),
  },
  {
    path: '**',
    redirectTo: '404',
  },
];
