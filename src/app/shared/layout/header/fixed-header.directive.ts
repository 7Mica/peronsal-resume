import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[fixedHeader]',
})
export class FixedHeaderDirective {
  constructor(private elem: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    const navHeight = this.elem.nativeElement.getBoundingClientRect();
    const menuHasBeenActived = this.elem.nativeElement.querySelector(
      '.header__menu.menu-opened'
    );

    if (menuHasBeenActived) {
      return;
    }

    if (
      scrollY > innerHeight &&
      (this.elem.nativeElement as Element).classList.contains('fixed-nav-menu')
    ) {
      return;
    }

    if (scrollY > navHeight.height) {
      this.renderer.addClass(this.elem.nativeElement, 'opacity-0');
    } else {
      this.renderer.removeClass(this.elem.nativeElement, 'opacity-0');
    }

    if (scrollY > innerHeight / 2) {
      this.renderer.removeClass(this.elem.nativeElement, 'opacity-0');
      this.renderer.addClass(this.elem.nativeElement, 'fixed-nav-menu');
    }

    if (scrollY < innerHeight / 6) {
      this.renderer.removeClass(this.elem.nativeElement, 'fixed-nav-menu');
    }
  }
}
