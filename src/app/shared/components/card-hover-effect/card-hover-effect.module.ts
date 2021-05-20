import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HTMLSanitizerModule } from '@core/pipes/html-sanitizer.pipe';
import { CardHoverEffectComponent } from './card-hover-effect.component';

@NgModule({
  declarations: [CardHoverEffectComponent],
  imports: [CommonModule, HTMLSanitizerModule],
  exports: [CardHoverEffectComponent],
})
export class CardHoverEffectModule {}
