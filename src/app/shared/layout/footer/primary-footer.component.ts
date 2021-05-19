import { Component, OnInit } from '@angular/core';
import { ITheme } from '@core/interfaces/theme.interface';
import { AccountService } from '@core/services/account.service';
import { ThemeColorService } from '@core/services/theme-color.service';
import { EMPTY, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'primary-footer',
  templateUrl: 'primary-footer.component.html',
  styleUrls: ['primary-footer.component.scss'],
})
export class PrimaryFooterComponent implements OnInit {
  theme = 'primary-theme';
  public selectedTheme$: Observable<ITheme> = EMPTY;
  public accountInformation$: Observable<any>;

  constructor(
    private themeService: ThemeColorService,
    private accountService: AccountService
  ) {
    this.accountInformation$ = this.accountService.getAccountInformation();
  }

  ngOnInit(): void {
    this.selectedTheme$ = this.themeService
      .themeValueChanged()
      .pipe(tap((theme: ITheme) => (this.theme = theme.name)));
  }

  public closeSession(): void {
    this.accountService.closeSession();
  }

  handleChangedTheme(): void {
    switch (this.theme) {
      case 'primary-theme':
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
