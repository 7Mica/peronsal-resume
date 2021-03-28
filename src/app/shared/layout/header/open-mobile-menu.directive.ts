import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[openMobileMenu]',
})
export class OpenMobileDirective {
  @Input() menu: any;
  @Input() parent: any;

  constructor(private elemRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('click')
  private clickHandler(): void {
    const isMenuOpened = this.menu.classList.contains('menu-opened');

    if (isMenuOpened) {
      this.renderer.removeClass(this.menu, 'menu-opened');

      this.renderer.removeClass(
        this.elemRef.nativeElement.querySelector('i'),
        'bi-x-circle'
      );

      this.renderer.addClass(
        this.elemRef.nativeElement.querySelector('i'),
        'bi-list'
      );

      this.renderer.removeClass(
        this.elemRef.nativeElement,
        'fixed-bottom-button'
      );
    } else {
      this.renderer.addClass(this.menu, 'menu-opened');

      this.renderer.removeClass(
        this.elemRef.nativeElement.querySelector('i'),
        'bi-list'
      );

      this.renderer.addClass(
        this.elemRef.nativeElement.querySelector('i'),
        'bi-x-circle'
      );

      this.renderer.addClass(this.elemRef.nativeElement, 'fixed-bottom-button');
    }
  }
}
