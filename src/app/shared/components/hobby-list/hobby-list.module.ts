import { NgModule } from '@angular/core';
import { CardHoverEffectModule } from '../card-hover-effect/card-hover-effect.module';
import { HobbyListComponent } from './hobby-list.component';

@NgModule({
  declarations: [HobbyListComponent],
  imports: [CardHoverEffectModule],
  exports: [HobbyListComponent],
})
export class HobbyListModule {}
