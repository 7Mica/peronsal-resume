import { NgModule } from '@angular/core';
import { CardSectionModule } from './components/card-section/card-section.module';
import { CarosuelModule } from './components/carousel/carousel.module';
import { EmailSectionModule } from './components/email-section/email-section.module';
import { IconSectionModule } from './components/icon-section/icon-section.module';
import { TextBackgroundModule } from './components/text-background/text-background.module';
import { TextImageSectionModule } from './components/text-image-section/text-image-section.module';
import { TextSectionModule } from './components/text-section/text-section.module';

@NgModule({
  exports: [
    TextSectionModule,
    TextImageSectionModule,
    CarosuelModule,
    CardSectionModule,
    TextBackgroundModule,
    IconSectionModule,
    EmailSectionModule,
  ],
})
export class SharedModule {}
