import { Component, OnInit } from '@angular/core';
import { ISlide } from '@core/interfaces/slide.interface';
import { HeaderTitleService } from '@core/services/header-title.service';

@Component({
  templateUrl: 'main-page.component.html',
  styleUrls: ['main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
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

  constructor(private headerTitle: HeaderTitleService) {}

  ngOnInit(): void {
    this.headerTitle.setTitle({
      title: 'HI EVERYONE',
      description: 'Welcome to my resume Website',
    });
  }
}
