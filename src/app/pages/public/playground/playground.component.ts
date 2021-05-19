import { Component, OnInit } from '@angular/core';
import { HeaderTitleService } from '@core/services/header-title.service';

@Component({
  templateUrl: 'playground.component.html',
  styleUrls: ['playground.component.scss'],
})
export class PlaygroundComponent implements OnInit {
  constructor(private headerTitle: HeaderTitleService) {}

  ngOnInit(): void {
    this.headerTitle.setTitle({
      title: 'Page for testing purposes',
      description: '🏗️ 🏗️ 🏗️ 🏗️ 🏗️',
    });
  }
}
