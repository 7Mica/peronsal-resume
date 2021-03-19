import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'text-image-section',
  templateUrl: 'text-image-section.component.html',
  styleUrls: ['text-image-section.component.scss'],
})
export class TextImageSectionComponent {
  public title = `Experience`;
  public image = `assets/images/profile-photo@2x.jpg`;
  public bodyMessage = `
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus odio
    labore ipsa temporibus dignissimos nemo dolorum magni, asperiores
    expedita? Quis omnis tempora, asperiores labore adipisci laborum iusto
    quae ex cum. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Possimus odio labore ipsa temporibus dignissimos nemo dolorum magni,
    asperiores expedita? Quis omnis tempora, asperiores labore adipisci
    laborum iusto quae ex cum.
  `;
}
