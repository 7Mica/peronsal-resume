import {
  Directive,
  ElementRef,
  Input,
  NgModule,
  OnDestroy,
  OnInit,
  Renderer2,
} from '@angular/core';
import { ITheme } from '@core/interfaces/theme.interface';
import { ThemeColorService } from '@core/services/theme-color.service';
import { Subject } from 'rxjs';

@Directive({
  selector: '[themeColor]',
})
export class ThemeColorDirective implements OnInit, OnDestroy {
  @Input()
  mainTheme: boolean;
  themeChanged$: Subject<ITheme>;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private themeService: ThemeColorService
  ) {
    this.themeChanged$ = this.themeService.themeValueChanged();
  }

  ngOnDestroy(): void {
    this.themeChanged$.unsubscribe();
  }

  ngOnInit(): void {
    this.themeChanged$.subscribe((currentTheme: ITheme) => {
      switch (currentTheme.name) {
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
          this.renderer.removeClass(
            this.elementRef.nativeElement,
            'main-theme'
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
        case 'tertiary':
          this.renderer.removeClass(
            this.elementRef.nativeElement,
            'secondary-theme'
          );
          this.renderer.removeClass(
            this.elementRef.nativeElement,
            'main-theme'
          );
          this.renderer.addClass(
            this.elementRef.nativeElement,
            'tertiary-theme'
          );
          break;
        default:
          break;
      }
    });
  }
}

@NgModule({
  declarations: [ThemeColorDirective],
  providers: [ThemeColorService],
  exports: [ThemeColorDirective],
})
export class ThemeColorDirectiveModule {}
