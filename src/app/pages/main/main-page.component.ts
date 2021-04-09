import { Component } from '@angular/core';
import { ISlide } from '@core/interfaces/slide.interface';

@Component({
  templateUrl: 'main-page.component.html',
  styleUrls: ['main-page.component.scss'],
})
export class MainPageComponent {
  public slides: ISlide[] = [
    {
      image: '/assets/images/cat-in-a-box@2x.jpg',
    },
    {
      image: '/assets/images/beach@2x.jpg',
    },
    {
      image: '/assets/images/road@2x.jpg',
    },
  ];
}
