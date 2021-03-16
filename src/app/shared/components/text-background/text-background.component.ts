import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'text-background',
  templateUrl: 'text-background.component.html',
  styleUrls: ['text-background.component.scss'],
})
export class TextBackgroundComponent {
  public assetUrl = environment.assetUrl;
}
