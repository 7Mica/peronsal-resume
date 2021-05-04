import { NgModule } from '@angular/core';
import { AbilitiesListModule } from './components/abilities-list/abilities-list.module';
import { AbilityListModule } from './components/admin/ability-list/ability-list.module';
import { HobbyListModule as HobbyListAdminModule } from './components/admin/hobby-list/hobby-list.module';
import { CareerListModule } from './components/admin/career-list/career-list.module';
import { EmailSectionModule } from './components/email-section/email-section.module';
import { HobbyListModule } from './components/hobby-list/hobby-list.module';
import { ListSectionModule } from './components/list-section/list-section.module';
import { TextSectionModule } from './components/text-section/text-section.module';

@NgModule({
  exports: [
    TextSectionModule,
    EmailSectionModule,
    ListSectionModule,
    AbilitiesListModule,
    HobbyListModule,
    CareerListModule,
    AbilityListModule,
    HobbyListAdminModule,
  ],
})
export class SharedModule {}
