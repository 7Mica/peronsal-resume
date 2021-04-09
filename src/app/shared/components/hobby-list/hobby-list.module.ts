import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardHoverEffectModule } from '../card-hover-effect/card-hover-effect.module';
import { HobbyListComponent } from './hobby-list.component';

@NgModule({
  declarations: [HobbyListComponent],
  imports: [CardHoverEffectModule, CommonModule],
  exports: [HobbyListComponent],
})
export class HobbyListModule {}
