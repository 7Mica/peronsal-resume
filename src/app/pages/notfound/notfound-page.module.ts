import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './notfound-page.component';

const routes: Routes = [
  {
    path: '',
    component: NotFoundPageComponent,
  },
];

@NgModule({
  declarations: [NotFoundPageComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotFoundPageModule {}
