import { Component } from '@angular/core';
import { ICareer } from '@core/interfaces/career.interface';

@Component({
  selector: 'list-section',
  templateUrl: 'list-section.component.html',
  styleUrls: ['list-section.component.scss'],
})
export class ListSectionComponent {
  public sectionTitle = 'Experiencie';
  public subsectionTitle = 'Careers';
  public careers: ICareer[] = [
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
  ];
}
