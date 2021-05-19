import { Component, OnInit } from '@angular/core';
import { HeaderTitleService } from '@core/services/header-title.service';

@Component({
  selector: 'thanks-page',
  templateUrl: 'thanks.component.html',
  styleUrls: ['thanks.component.scss'],
})
export class ThanksComponent implements OnInit {
  constructor(private headerTitle: HeaderTitleService) {}

  ngOnInit(): void {
    this.headerTitle.setTitle({
      title: '🙌️',
      description: '🌟️🌟️🌟️🌟️🌟️',
    });
  }
}
