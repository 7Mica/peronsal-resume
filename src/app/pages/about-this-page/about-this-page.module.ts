import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutThisPageComponent } from './about-this-page.component';

const routes: Routes = [
  {
    path: '',
    component: AboutThisPageComponent,
  },
];

@NgModule({
  declarations: [AboutThisPageComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutThisPageModule {}
