import { Routes } from '@angular/router';
import { SessionGuard } from '../auth/guards/session.guard';
import { PagesComponent } from './pages.component';

export const PAGES_ROUTES: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
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
      {
        path: 'edit-resume',
        canActivate: [SessionGuard],
        loadChildren: () =>
          import('../pages/admin/resume/resume.module').then(
            (m) => m.ResumeModule
          ),
      },
    ],
  },
];
