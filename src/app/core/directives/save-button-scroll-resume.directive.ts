import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
  NgModule,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[saveBtnScroll]',
})
export class SaveButtonScrollResumeDirective implements AfterViewInit {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:scroll', ['$event']) onScroll() {
    const parentNodeHeight = this.renderer
      .parentNode(this.elementRef.nativeElement)
      .getBoundingClientRect().height;

    if (pageYOffset <= parentNodeHeight) {
      this.renderer.setStyle(
        this.elementRef.nativeElement,
        'top',
        `${pageYOffset}px`
      );
    }
  }

  ngAfterViewInit(): void {}
}

@NgModule({
  declarations: [SaveButtonScrollResumeDirective],
  exports: [SaveButtonScrollResumeDirective],
})
export class SaveButtonScrollResumeModule {}
