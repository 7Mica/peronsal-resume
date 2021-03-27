import { NgModule } from '@angular/core';
import { AnimateElementOnScrollModule } from '@core/directives/animate-element-on-scroll.directive';
import { TextBackgroundComponent } from './text-background.component';

@NgModule({
  declarations: [TextBackgroundComponent],
  imports: [AnimateElementOnScrollModule],
  exports: [TextBackgroundComponent],
})
export class TextBackgroundModule {}
