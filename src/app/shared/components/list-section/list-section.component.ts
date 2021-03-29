import { Component } from '@angular/core';
import { Career as ICareer } from '@core/interfaces/career.interface';

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
      yearRange: '2020 - 2021',
      monthRange: 'December - March',
      job: 'Backend Developer',
      description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
      itaque odio enim exercitationem, tempora corporis nihil sint
      ratione distinctio tempore doloremque magni tenetur labore ab
      quasi unde error similique asperiores?`,
    },
    {
      company: 'D4ALL',
      yearRange: '2019 - 2020',
      monthRange: 'October - September',
      job: 'Web Developer',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
      itaque odio enim exercitationem, tempora corporis nihil sint
      ratione distinctio tempore doloremque magni tenetur labore ab
      quasi unde error similique asperiores?`,
    },
    {
      company: 'Heteria Group',
      yearRange: '2018 - 2019',
      monthRange: 'September - Octeber',
      job: 'Web Developer',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
      itaque odio enim exercitationem, tempora corporis nihil sint
      ratione distinctio tempore doloremque magni tenetur labore ab
      quasi unde error similique asperiores?`,
    },
    {
      company: 'ITT CIDETI',
      yearRange: '2018 - 2018',
      monthRange: 'March - December',
      job: 'Web Developer',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
      itaque odio enim exercitationem, tempora corporis nihil sint
      ratione distinctio tempore doloremque magni tenetur labore ab
      quasi unde error similique asperiores?`,
    },
  ];
}
