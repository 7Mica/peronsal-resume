import { Component, Input } from '@angular/core';
import { IHobbyListData } from '@core/interfaces/hobby-list-data.interface';

@Component({
  selector: 'hobby-list',
  templateUrl: 'hobby-list.component.html',
  styleUrls: ['hobby-list.component.scss'],
})
export class HobbyListComponent {
  @Input()
  data: IHobbyListData;
}
