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
          name: 'Typescript',
          percent: 79,
        },
        {
          name: 'Java SE',
          percent: 20,
        },
        {
          name: 'Javascript',
          percent: 59,
        },
        {
          name: 'PHP',
          percent: 35,
        },
        {
          name: 'Angular',
          percent: 62,
        },
        {
          name: 'Express.js',
          percent: 40,
        },
        {
          name: 'NestJS',
          percent: 62,
        },
        {
          name: 'Laravel',
          percent: 35,
        },
        {
          name: 'GraphQL',
          percent: 45,
        },
        {
          name: 'Node.js',
          percent: 38,
        },
        {
          name: 'Drupal',
          percent: 39,
        },
        {
          name: 'Sass',
          percent: 70,
        },
        {
          name: 'Docker',
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
      name: 'Tools',
      items: [
        {
          name: 'VSCode',
          percent: 80,
        },
      ],
    },
  ];
}
