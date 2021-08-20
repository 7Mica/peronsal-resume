import { Component, Input } from '@angular/core';
import { IHobby } from '@core/interfaces/hobby.interface';

@Component({
  templateUrl: 'card-hover-effect.component.html',
  selector: 'card-hover-effect',
  styleUrls: ['card-hover-effect.component.scss'],
})
export class CardHoverEffectComponent {
  @Input()
  hobby: IHobby | null = null;
}
