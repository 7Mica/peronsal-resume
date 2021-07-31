import { Component, OnInit } from '@angular/core';
import { SELECTED_RESUME } from '@core/graphql/queries/resume-queries';
import { EditablePageService } from '@core/services/editable-page.service';
import { HeaderTitleService } from '@core/services/header-title.service';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  templateUrl: 'main-page.component.html',
  styleUrls: ['main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  public selectedResume$: Observable<any>;

  constructor(
    private headerTitle: HeaderTitleService,
    private apollo: Apollo,
    private editablePage: EditablePageService
  ) {
    this.selectedResume$ = this.apollo
      .query({ query: SELECTED_RESUME })
      .pipe(map((response: any) => this.mapResumeResponse(response)));
  }

  ngOnInit(): void {
    this.editablePage.announceIfEditable({
      editable: true,
      editionPage: '/edit-resume',
    });

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
