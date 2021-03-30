import { NgModule } from '@angular/core';
import { AbilitiesListModule } from './components/abilities-list/abilities-list.module';
import { EmailSectionModule } from './components/email-section/email-section.module';
import { ListSectionModule } from './components/list-section/list-section.module';
import { TextSectionModule } from './components/text-section/text-section.module';

@NgModule({
  exports: [
    TextSectionModule,
    EmailSectionModule,
    ListSectionModule,
    AbilitiesListModule,
  ],
})
export class SharedModule {}
