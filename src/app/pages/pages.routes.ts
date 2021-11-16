import { Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

export const PAGES_ROUTES: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        data: {
          editable: true,
        },
        loadChildren: () =>
          import('./public/main/main-page.module').then(
            (m) => m.MainPageModule
          ),
      },
      {
        path: 'thanks',
        loadChildren: () =>
          import('./public/thanks/thanks.module').then((m) => m.ThanksModule),
      },
      {
        path: 'playground',
        loadChildren: () =>
          import('./public/playground/playground.module').then(
            (m) => m.PlaygroundModule
          ),
      },
      {
        path: 'about-this-page',
        loadChildren: () =>
          import('./public/about-this-page/about-this-page.module').then(
            (m) => m.AboutThisPageModule
          ),
      },
    ],
  },
];
