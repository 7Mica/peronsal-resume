import { Component, Input } from '@angular/core';
import { IListSectionData } from '@core/interfaces/list-section-data.interface';

@Component({
  selector: 'list-section',
  templateUrl: 'list-section.component.html',
  styleUrls: ['list-section.component.scss'],
})
export class ListSectionComponent {
  @Input()
  data: IListSectionData;
}
