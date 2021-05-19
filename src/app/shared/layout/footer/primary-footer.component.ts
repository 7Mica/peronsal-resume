import { Component } from '@angular/core';
import { AccountService } from '@core/services/account.service';
import { ThemeColorService } from '@core/services/theme-color.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'primary-footer',
  templateUrl: 'primary-footer.component.html',
  styleUrls: ['primary-footer.component.scss'],
})
export class PrimaryFooterComponent {
  theme = 'main-theme';
  public accountInformation$: Observable<any>;

  constructor(
    private themeService: ThemeColorService,
    private accountService: AccountService
  ) {
    this.accountInformation$ = this.accountService.getAccountInformation();
  }

  public closeSession(): void {
    this.accountService.closeSession();
  }

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
