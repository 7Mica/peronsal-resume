import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HTMLSanitizerModule } from '@core/pipes/html-sanitizer.pipe';
import { ListSectionComponent } from './list-section.component';

@NgModule({
  declarations: [ListSectionComponent],
  imports: [CommonModule, HTMLSanitizerModule],
  exports: [ListSectionComponent],
})
export class ListSectionModule {}
