import { Component, OnInit } from '@angular/core';
import { HeaderTitleService } from '@core/services/header-title.service';
import { RestService } from '@core/services/rest.service';
import { EMPTY, map, Observable, tap } from 'rxjs';

@Component({
  templateUrl: 'main-page.component.html',
  styleUrls: ['main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  public selectedResume$: Observable<any> = EMPTY;

  constructor(
    private headerTitle: HeaderTitleService,
    private restService: RestService
  ) {}

  ngOnInit(): void {
    this.headerTitle.setTitle({
      title: 'Hi Everyone',
      description: 'Welcome to my resume Website',
    });

    this.selectedResume$ = this.restService
      .get('/personal-resume')
      .pipe(map((resume) => this.mapResumeResponse(resume)));
  }

  protected mapResumeResponse(response: any): any {
    const { careers, abilities, hobbies, ...profileInfo } = response;

    return {
      careers,
      abilities,
      hobbies,
      personalInformation: profileInfo,
    };
  }
}
