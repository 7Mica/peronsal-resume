import { Component } from '@angular/core';
import { IHobby } from '@core/interfaces/hobby.interface';

@Component({
  selector: 'hobby-list',
  templateUrl: 'hobby-list.component.html',
  styleUrls: ['hobby-list.component.scss'],
})
export class HobbyListComponent {
  hobbyList: IHobby[] = [
    {
      name: 'Biking',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. ',
      altText: 'Bicycle',
      image: 'assets/images/bike@1x.png',
      image2x: 'assets/images/bike@2x.png',
    },
    {
      name: 'Read',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. ',
      altText: 'Books',
      image: 'assets/images/books@1x.png',
      image2x: 'assets/images/books@2x.png',
    },
    {
      name: 'Video games',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. ',
      altText: 'Video games',
      image: 'assets/images/video-games@1x.png',
      image2x: 'assets/images/video-games@2x.png',
    },
  ];
}
