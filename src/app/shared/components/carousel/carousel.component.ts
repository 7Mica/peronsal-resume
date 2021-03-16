import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { scaleIn, scaleOut } from '@core/animations/carousel';
import { Slide } from '@core/interfaces/slide.interface';

@Component({
  selector: 'carousel',
  templateUrl: 'carousel.component.html',
  styleUrls: ['carousel.component.scss'],
  animations: [
    trigger('slideAnimation', [
      transition('void => scale', [
        useAnimation(scaleIn, { params: { time: '500ms' } }),
      ]),
      transition('scale => void', [
        useAnimation(scaleOut, { params: { time: '500ms' } }),
      ]),
    ]),
  ],
})
export class CarouselComponent {
  @Input() slides: Slide[];
  currentSlide = 0;

  handleClick(action: string): void {
    switch (action) {
      case 'next':
        if (this.currentSlide === this.slides.length - 1) {
          this.currentSlide = 0;
        } else {
          this.currentSlide++;
        }
        break;
      case 'back':
        if (this.currentSlide < 0 || this.currentSlide === 0) {
          this.currentSlide = this.slides.length - 1;
        } else {
          this.currentSlide--;
        }
        break;
      default:
        break;
    }
  }
}
