import {
  Directive,
  ElementRef,
  NgModule,
  OnDestroy,
  Renderer2,
} from '@angular/core';
import { ITheme } from '@core/interfaces/theme.interface';
import { ThemeColorService } from '@core/services/theme-color.service';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[themeColor]',
})
export class ThemeColorDirective implements OnDestroy {
  themeChangedSubscription: Subscription;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private themeService: ThemeColorService
  ) {
    this.themeChangedSubscription = this.themeService
      .themeValueChanged()
      .subscribe((currentTheme: ITheme) => this.switchTheme(currentTheme));
  }

  ngOnDestroy(): void {
    this.themeChangedSubscription.unsubscribe();
  }

  protected switchTheme(theme: ITheme): void {
    switch (theme.name) {
      case 'primary':
        this.renderer.removeClass(
          this.elementRef.nativeElement,
          'secondary-theme'
        );
        this.renderer.removeClass(
          this.elementRef.nativeElement,
          'tertiary-theme'
        );
        this.renderer.addClass(this.elementRef.nativeElement, 'main-theme');
        break;

      case 'secondary':
        this.renderer.removeClass(this.elementRef.nativeElement, 'main-theme');
        this.renderer.removeClass(
          this.elementRef.nativeElement,
          'tertiary-theme'
        );
        this.renderer.addClass(
          this.elementRef.nativeElement,
          'secondary-theme'
        );
        break;

      case 'tertiary':
        this.renderer.removeClass(
          this.elementRef.nativeElement,
          'secondary-theme'
        );
        this.renderer.removeClass(this.elementRef.nativeElement, 'main-theme');
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
