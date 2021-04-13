import { Component } from '@angular/core';
import { ThemeColorService } from '@core/services/theme-color.service';

@Component({
  selector: 'primary-footer',
  templateUrl: 'primary-footer.component.html',
  styleUrls: ['primary-footer.component.scss'],
})
export class PrimaryFooterComponent {
  theme = 'main-theme';

  constructor(private themeService: ThemeColorService) {}

  handleChange(): void {
    switch (this.theme) {
      case 'main-theme':
        this.themeService.setPrimaryTheme();
        break;
      case 'secondary-theme':
        this.themeService.setSecondaryTheme();
        break;
      case 'tertiary-theme':
        this.themeService.setTertiaryTheme();
        break;
      default:
        break;
    }
  }
}
