import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'icon-section',
  templateUrl: 'icon-section.component.html',
  styleUrls: ['icon-section.component.scss'],
})
export class IconSectionComponent {
  public assetUrl = environment.assetUrl;
}
