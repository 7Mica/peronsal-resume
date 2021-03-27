import { NgModule } from '@angular/core';
import { AnimateElementOnScrollModule } from '@core/directives/animate-element-on-scroll.directive';
import { CardSectionComponent } from './card-section.component';

@NgModule({
  declarations: [CardSectionComponent],
  imports: [AnimateElementOnScrollModule],
  exports: [CardSectionComponent],
})
export class CardSectionModule {}
