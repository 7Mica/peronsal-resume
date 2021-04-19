import { Component, Input } from '@angular/core';
import { IAbilitiesListData } from '@core/interfaces/abilities-list-data.interface';

@Component({
  selector: 'abilities-list',
  templateUrl: 'abilities-list.component.html',
  styleUrls: ['abilities-list.component.scss'],
})
export class AbilitiesListComponent {
  @Input()
  data: IAbilitiesListData;
}
