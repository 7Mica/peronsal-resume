import { Routes } from '@angular/router';

export const MAIN_ROUTES: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../../pages/main/main-page.module').then((m) => m.MainPageModule),
  },
  {
    path: 'thanks',
    loadChildren: () =>
      import('../../pages/thanks/thanks.module').then((m) => m.ThanksModule),
  },
  {
    path: 'playground',
    loadChildren: () =>
      import('../../pages/playground/playground.module').then(
        (m) => m.PlaygroundModule
      ),
  },
  {
    path: 'about-this-page',
    loadChildren: () =>
      import('../../pages/about-this-page/about-this-page.module').then(
        (m) => m.AboutThisPageModule
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
