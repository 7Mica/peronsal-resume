import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[closeMenu]',
})
export class CloseMenuDirective {
  @Input() parent: any;

  constructor(private elemRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('click')
  clickHandler(): void {
    const menu = this.parent.querySelector('ul.header__menu');
    const button = this.parent.querySelector('button.header__btn-burguer');
    const liElem = button.querySelector('i');

    this.renderer.removeClass(menu, 'menu-opened');
    this.renderer.removeClass(button, 'fixed-bottom-button');

    this.renderer.removeClass(liElem, 'bi-x-circle');

    this.renderer.addClass(liElem, 'bi-list');
  }
}
