import {
  animate,
  animateChild,
  group,
  query,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, Input } from '@angular/core';
import { IHobby } from '@core/interfaces/hobby.interface';

@Component({
  templateUrl: 'card-hover-effect.component.html',
  selector: 'card-hover-effect',
  styleUrls: ['card-hover-effect.component.scss'],
  animations: [
    trigger('animateHeight', [
      state('init', style({ height: '*', transform: 'translateY(10%)' })),
      state('ends', style({ height: '100%', transform: 'translateY(0)' })),

      transition('* <=> *', [
        group([query('@childAnimation', animateChild()), animate(400)]),
      ]),
    ]),
    trigger('childAnimation', [
      state('init', style({ transform: 'translateY(50%)', opacity: '0' })),
      state('ends', style({ transform: 'translateY(0)', opacity: 1 })),
      transition('* <=> *', animate(400)),
    ]),
  ],
})
export class CardHoverEffectComponent {
  @Input()
  hobby: IHobby;

  public isTriggered = false;

  get triggerEp(): string {
    return this.isTriggered ? 'ends' : 'init';
  }
}
