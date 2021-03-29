import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AnimateWidthDirectiveModule } from '@core/directives/animate-width.directive';
import { AbilitiesListComponent } from './abilities-list.component';

@NgModule({
  declarations: [AbilitiesListComponent],
  imports: [AnimateWidthDirectiveModule, CommonModule],
  exports: [AbilitiesListComponent],
})
export class AbilitiesListModule {}
