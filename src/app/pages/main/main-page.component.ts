import { Component } from '@angular/core';
import { Slide } from '@core/interfaces/slide.interface';

@Component({
  templateUrl: 'main-page.component.html',
  styleUrls: ['main-page.component.scss'],
})
export class MainPageComponent {
  public slides: Slide[] = [
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
