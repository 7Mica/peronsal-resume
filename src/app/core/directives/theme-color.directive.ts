import {
  Directive,
  ElementRef,
  NgModule,
  OnDestroy,
  OnInit,
  Renderer2,
} from '@angular/core';
import { ITheme } from '@core/interfaces/theme.interface';
import { LocalStorageService } from '@core/services/local-storage.service';
import { ThemeColorService } from '@core/services/theme-color.service';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[themeColor]',
})
export class ThemeColorDirective implements OnDestroy, OnInit {
  themeChangedSubscription: Subscription = new Subscription();

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private themeService: ThemeColorService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.themeChangedSubscription = this.themeService
      .themeValueChanged()
      .subscribe((currentTheme: ITheme) => this.switchTheme(currentTheme));

    const savedThemeConfig = this.localStorageService.getValue('themeConfig');

    switch (savedThemeConfig) {
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
        this.themeService.setPrimaryTheme();
        break;
    }
  }

  ngOnDestroy(): void {
    this.themeChangedSubscription.unsubscribe();
  }

  protected switchTheme(theme: ITheme): void {
    switch (theme.name) {
      case 'primary-theme':
        this.renderer.removeClass(
          this.elementRef.nativeElement,
          'secondary-theme'
        );

        this.renderer.removeClass(
          this.elementRef.nativeElement,
          'tertiary-theme'
        );

        this.renderer.addClass(this.elementRef.nativeElement, 'primary-theme');
        break;

      case 'secondary-theme':
        this.renderer.removeClass(
          this.elementRef.nativeElement,
          'primary-theme'
        );

        this.renderer.removeClass(
          this.elementRef.nativeElement,
          'tertiary-theme'
        );

        this.renderer.addClass(
          this.elementRef.nativeElement,
          'secondary-theme'
        );
        break;

      case 'tertiary-theme':
        this.renderer.removeClass(
          this.elementRef.nativeElement,
          'secondary-theme'
        );

        this.renderer.removeClass(
          this.elementRef.nativeElement,
          'primary-theme'
        );

        this.renderer.addClass(this.elementRef.nativeElement, 'tertiary-theme');
        break;

      default:
        break;
    }
  }
}

@NgModule({
  declarations: [ThemeColorDirective],
  exports: [ThemeColorDirective],
})
export class ThemeColorDirectiveModule {}
