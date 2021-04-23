import { Component, OnInit } from '@angular/core';
import { IAbilitiesListData } from '@core/interfaces/abilities-list-data.interface';
import { IHobbyListData } from '@core/interfaces/hobby-list-data.interface';
import { IListSectionData } from '@core/interfaces/list-section-data.interface';
import { ITextSectionData } from '@core/interfaces/text-section-data.interface';
import { HeaderTitleService } from '@core/services/header-title.service';

@Component({
  templateUrl: 'main-page.component.html',
  styleUrls: ['main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  public textSectionData: ITextSectionData = {
    location: 'Tepic, NAY. México.',
    profileImage: 'assets/images/profile.png',
    age: 28,
    bodyMessage: `
    <h2 id="about" class="section-title"> A little about me </h2>

    <p>
      Software Developer with focus on Web develpmen. Experience programming in
      frameworks such as Angular,
      NestJS, and developing RESTful API services and GraphqQL.
    </p>

    <p>
      As a person, I'm always trying to find the way to be a btter Software
      Developer and improve my programming skills and learn new software trends.
      Another thought that i have is working as a team is one of the best things
      that people can do, becaouse there are things that you don;t learn by your
      self and the support as team mates is worth.
    </p>

    <a target="_blank" aria-label="download resume" class="btn btn-primary" href="assets/files/Resume--Fermin-Casillas.pdf">
      Download Resume
    </a>
  `,
  };

  public listSectionData: IListSectionData = {
    sectionTitle: 'Experiencie',
    subSectionTitle: 'Careers',
    careers: [
      {
        company: 'Dot Devs',
        yearRange: 'December 2020 - March 2021',
        job: 'Backend Developer',
        description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
      itaque odio enim exercitationem, tempora corporis nihil sint
      ratione distinctio tempore doloremque magni tenetur labore ab
      quasi unde error similique asperiores?`,
        location: 'Tepic, Nayarit. México.',
      },
      {
        company: 'D4ALL',
        yearRange: 'October 2019 - September 2020',
        job: 'Web Developer',
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
      itaque odio enim exercitationem, tempora corporis nihil sint
      ratione distinctio tempore doloremque magni tenetur labore ab
      quasi unde error similique asperiores?`,
        location: 'Tepic, Nayarit. México.',
      },
      {
        company: 'Heteria Group',
        yearRange: 'September 2018 - October 2019',
        job: 'Web Developer',
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
      itaque odio enim exercitationem, tempora corporis nihil sint
      ratione distinctio tempore doloremque magni tenetur labore ab
      quasi unde error similique asperiores?`,
        location: 'Tepic, Nayarit. México.',
      },
      {
        company: 'ITT CIDETI',
        yearRange: 'March 2018 - December 2018',
        job: 'Web Developer',
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
      itaque odio enim exercitationem, tempora corporis nihil sint
      ratione distinctio tempore doloremque magni tenetur labore ab
      quasi unde error similique asperiores?`,
        location: 'Tepic, Nayarit. México.',
      },
      {
        company: 'Instituto Tecnológico de Tepic',
        yearRange: 'Agoust 2012 - December 2018',
        job: 'Computer Systems Engineer Student',
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
      itaque odio enim exercitationem, tempora corporis nihil sint
      ratione distinctio tempore doloremque magni tenetur labore ab
      quasi unde error similique asperiores?`,
        location: 'Tepic, Nayarit. México.',
      },
    ],
  };

  public abilitiesListData: IAbilitiesListData = {
    sectionTitle: 'Abilities',
    abilities: [
      {
        name: 'Skills',
        items: [
          {
            name: `<img src="assets/icons/brand-icons/typescript.svg" width="50" height="50">`,
            percent: 79,
          },
          {
            name: `<img src="assets/icons/brand-icons/java.svg" width="50" height="50">`,
            percent: 20,
          },
          {
            name: `<img src="assets/icons/brand-icons/javascript.svg" width="50" height="50">`,
            percent: 59,
          },
          {
            name: `<img src="assets/icons/brand-icons/php.svg" width="50" height="50">`,
            percent: 35,
          },
          {
            name: `<img src="assets/icons/brand-icons/angular.svg" width="50" height="50">`,
            percent: 62,
          },
          {
            name: `<img src="assets/icons/brand-icons/expressjs.svg" width="50" height="50">`,
            percent: 40,
          },
          {
            name: `<img src="assets/icons/brand-icons/nestjs.svg" width="50" height="50">`,
            percent: 62,
          },
          {
            name: `<img src="assets/icons/brand-icons/laravel.svg" width="50" height="50">`,
            percent: 35,
          },
          {
            name: `<img src="assets/icons/brand-icons/graphql.svg" width="50" height="50">`,
            percent: 45,
          },
          {
            name: `<img src="assets/icons/brand-icons/nodejs.svg" width="50" height="50">`,
            percent: 38,
          },
          {
            name: `<img src="assets/icons/brand-icons/drupal.svg" width="50" height="50">`,
            percent: 39,
          },
          {
            name: `<img src="assets/icons/brand-icons/sass.svg" width="50" height="50">`,
            percent: 70,
          },
          {
            name: `<img src="assets/icons/brand-icons/docker.svg" width="50" height="50">`,
            percent: 57,
          },
        ],
      },
      {
        name: 'Languages',
        items: [
          {
            name: 'Spanish <i>(Native Language)</i>',
            percent: 100,
          },
          {
            name: 'English',
            percent: 70,
          },
        ],
      },
      {
        name: 'Operating Systems',
        items: [
          {
            name:
              '<img src="assets/icons/brand-icons/ubuntu.svg" width="50" height="50">',
            percent: 57,
          },
          {
            name:
              '<img src="assets/icons/brand-icons/macos.svg" width="50" height="50">',
            percent: 50,
          },
          {
            name:
              '<img src="assets/icons/brand-icons/win2.svg" width="50" height="50">',
            percent: 50,
          },
        ],
      },
      {
        name: 'Tools',
        items: [
          {
            name: `<img src="assets/icons/brand-icons/vscode.svg" width="50" height="50">`,
            percent: 80,
          },
          {
            name: `<img src="assets/icons/brand-icons/axd.svg" width="50" height="50">`,
            percent: 80,
          },
        ],
      },
    ],
  };

  public hobbyListData: IHobbyListData = {
    sectionTitle: 'Hobbies',
    hobbyList: [
      {
        name: 'Biking',
        description:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. ',
        altText: 'Bicycle',
        image: 'assets/images/bike@1x.png',
        image2x: 'assets/images/bike@2x.png',
      },
      {
        name: 'Read',
        description:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. ',
        altText: 'Books',
        image: 'assets/images/books@1x.png',
        image2x: 'assets/images/books@2x.png',
      },
      {
        name: 'Video games',
        description:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. ',
        altText: 'Video games',
        image: 'assets/images/video-games@1x.png',
        image2x: 'assets/images/video-games@2x.png',
      },
    ],
  };

  constructor(private headerTitle: HeaderTitleService) {}

  ngOnInit(): void {
    this.headerTitle.setTitle({
      title: 'HI EVERYONE',
      description: 'Welcome to my resume Website',
    });
  }
}
