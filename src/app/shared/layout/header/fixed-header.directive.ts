import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[fixedHeader]',
})
export class FixedHeaderDirective {
  constructor(private elem: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    const navHeight = this.elem.nativeElement.getBoundingClientRect();

    if (window.pageYOffset > navHeight.height) {
      this.renderer.addClass(this.elem.nativeElement, 'opacity-0');
    } else {
      this.renderer.removeClass(this.elem.nativeElement, 'opacity-0');
    }

    if (window.pageYOffset > window.innerHeight / 2) {
      this.renderer.removeClass(this.elem.nativeElement, 'opacity-0');
      this.renderer.addClass(this.elem.nativeElement, 'fixed-nav-menu');
    }

    if (window.pageYOffset < window.innerHeight / 6) {
      this.renderer.removeClass(this.elem.nativeElement, 'fixed-nav-menu');
    }

    if (
      window.pageYOffset > window.innerHeight / 3 &&
      window.pageYOffset < window.innerHeight / 2
    ) {
      this.renderer.removeClass(this.elem.nativeElement, 'opacity-0');
      this.renderer.addClass(this.elem.nativeElement, 'opacity-0');
    }
  }
}
