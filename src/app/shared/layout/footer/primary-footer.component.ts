import { Component, OnInit } from '@angular/core';
import { ITheme } from '@core/interfaces/theme.interface';
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

  constructor(private themeService: ThemeColorService) {}

  ngOnInit(): void {
    this.selectedTheme$ = this.themeService
      .themeValueChanged()
      .pipe(tap((theme: ITheme) => (this.theme = theme.name)));
  }

  public closeSession(): void {}

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
