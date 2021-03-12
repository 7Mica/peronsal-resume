import { NgModule } from '@angular/core';
import { TextSectionModule } from './components/text-section/text-section.module';

@NgModule({
  imports: [TextSectionModule],
  exports: [TextSectionModule],
})
export class SharedModule {}
