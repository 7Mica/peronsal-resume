import { Component, Input } from '@angular/core';
import { ITextSectionData } from '@core/interfaces/text-section-data.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'text-section',
  templateUrl: 'text-section.component.html',
  styleUrls: ['text-section.component.scss'],
})
export class TextSectionComponent {
  @Input()
  data: ITextSectionData | null = null;

  apiUrl = environment.apiUrl;
}
