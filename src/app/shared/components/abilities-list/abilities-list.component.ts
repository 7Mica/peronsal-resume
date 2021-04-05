import { Component } from '@angular/core';
import { IAbility } from '@core/interfaces/ability.interface';

@Component({
  selector: 'abilities-list',
  templateUrl: 'abilities-list.component.html',
  styleUrls: ['abilities-list.component.scss'],
})
export class AbilitiesListComponent {
  public sectionTitle = 'Abilities';
  public abilities: IAbility[] = [
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
  ];
}
