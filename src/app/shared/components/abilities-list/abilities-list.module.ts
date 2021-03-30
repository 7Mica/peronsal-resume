import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AnimateWidthDirectiveModule } from '@core/directives/animate-width.directive';
import { HTMLSanitizerModule } from '@core/pipes/html-sanitizer.pipe';
import { AbilitiesListComponent } from './abilities-list.component';

@NgModule({
  declarations: [AbilitiesListComponent],
  imports: [AnimateWidthDirectiveModule, CommonModule, HTMLSanitizerModule],
  exports: [AbilitiesListComponent],
})
export class AbilitiesListModule {}
