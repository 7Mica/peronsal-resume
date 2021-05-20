import { Component, Input } from '@angular/core';
import { ICareer } from '@core/interfaces/career.interface';

@Component({
  selector: 'list-section',
  templateUrl: 'list-section.component.html',
  styleUrls: ['list-section.component.scss'],
})
export class ListSectionComponent {
  @Input()
  data: ICareer[] | null = null;

  public sectionTitle = 'Experiencie';
  public subSectionTitle = 'Careers';
}
