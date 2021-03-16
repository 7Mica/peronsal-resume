import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'card-section',
  templateUrl: 'card-section.component.html',
  styleUrls: ['card-section.component.scss'],
})
export class CardSectionComponent {
  public assetUrl = environment.assetUrl;
}
