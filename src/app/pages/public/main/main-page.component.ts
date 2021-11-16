import { Component, OnInit } from '@angular/core';
import { HeaderTitleService } from '@core/services/header-title.service';
import { EMPTY, Observable } from 'rxjs';

@Component({
  templateUrl: 'main-page.component.html',
  styleUrls: ['main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  public selectedResume$: Observable<any> = EMPTY;

  constructor(private headerTitle: HeaderTitleService) {}

  ngOnInit(): void {
    this.headerTitle.setTitle({
      title: 'Hi Everyone',
      description: 'Welcome to my resume Website',
    });
  }

  protected mapResumeResponse(response: any): any {
    const {
      data: { getDefaultResume },
    } = response;

    if (!getDefaultResume) {
      return null;
    }

    const { careers, abilities, hobbies, ...profileInfo } = getDefaultResume;

    return {
      careers,
      abilities,
      hobbies,
      personalInformation: profileInfo,
    };
  }
}
