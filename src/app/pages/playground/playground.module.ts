import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaygroundComponent } from './playground.component';

const routes: Routes = [
  {
    path: '',
    component: PlaygroundComponent,
  },
];

@NgModule({
  declarations: [PlaygroundComponent],
  imports: [RouterModule.forChild(routes)],
})
export class PlaygroundModule {}
