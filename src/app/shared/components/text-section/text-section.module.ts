import { NgModule } from '@angular/core';
import { HTMLSanitizerModule } from '@core/pipes/html-sanitizer.pipe';
import { TextSectionComponent } from './text-section.component';

@NgModule({
  declarations: [TextSectionComponent],
  imports: [HTMLSanitizerModule],
  exports: [TextSectionComponent],
})
export class TextSectionModule {}
