import { Component } from '@angular/core';
import { IHeaderTitle } from '@core/interfaces/header-title.interface';
import { HeaderTitleService } from '@core/services/header-title.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'primary-header',
  templateUrl: 'primary-header.component.html',
  styleUrls: ['primary-header.component.scss'],
})
export class PrimaryHeaderComponent {
  headerTitle$: Observable<IHeaderTitle>;

  constructor(private headerTitle: HeaderTitleService) {
    this.headerTitle$ = this.headerTitle.getTitle();
  }
}
