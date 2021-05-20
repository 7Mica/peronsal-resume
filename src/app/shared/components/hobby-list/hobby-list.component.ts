import { Component, Input } from '@angular/core';
import { IHobby } from '@core/interfaces/hobby.interface';

@Component({
  selector: 'hobby-list',
  templateUrl: 'hobby-list.component.html',
  styleUrls: ['hobby-list.component.scss'],
})
export class HobbyListComponent {
  @Input()
  data: IHobby[] | null = null;

  public sectionTitle = 'Hobbies';
}
