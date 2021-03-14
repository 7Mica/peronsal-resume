import { NgModule } from '@angular/core';
import { TextImageSectionModule } from './components/text-image-section/text-image-section.module';
import { TextSectionModule } from './components/text-section/text-section.module';

@NgModule({
  exports: [TextSectionModule, TextImageSectionModule],
})
export class SharedModule {}
