import { Component, OnInit } from '@angular/core';
import { HeaderTitleService } from '@core/services/header-title.service';

@Component({
  selector: 'about-this-page',
  templateUrl: 'about-this-page.component.html',
  styleUrls: ['about-this-page.component.scss'],
})
export class AboutThisPageComponent implements OnInit {
  constructor(private headerTitle: HeaderTitleService) {}

  ngOnInit(): void {
    this.headerTitle.setTitle({
      title: 'What about this page?',
      description: 'This is how I built this page 🏗️',
    });
  }
}
