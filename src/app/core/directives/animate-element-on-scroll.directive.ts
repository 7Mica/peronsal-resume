import {
  animate,
  AnimationBuilder,
  AnimationPlayer,
  keyframes,
  style,
} from '@angular/animations';
import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
  Input,
  NgModule,
  Renderer2,
} from '@angular/core';
import { entryAnimation } from '@core/animations/common-animations';

@Directive({
  selector: '[scrollFadeIn]',
})
export class AnimateElementOnScrollDirective implements AfterViewInit {
  scrollBefore = 0;
  player: AnimationPlayer | undefined;
  private animated = false;
  private delayAnimations = 0;
  private elementViewPercents = 0.2;
  private animations = 'scaleInTop';

  @Input()
  set delayAnimation(delayAnimation: number) {
    if (delayAnimation) {
      this.delayAnimations = delayAnimation;
    }
  }

  @Input()
  set animation(animation: string) {
    if (animation) {
      this.animations = animation;
    }
  }

  @Input()
  set elementViewPercent(elementViewPercent: number) {
    if (elementViewPercent) {
      this.elementViewPercents = elementViewPercent;
    }
  }

  constructor(
    private elem: ElementRef,
    private builder: AnimationBuilder,
    private renderer: Renderer2
  ) {}

  @HostListener('window:scroll', ['$event'])
  scrollHandler(): void {
    const scrolled = scrollY;

    if (this.scrollBefore > scrolled) {
      this.scrollBefore = scrolled;
      if (
        this.isInViewport(this.elem.nativeElement) &&
        this.animated === true
      ) {
        this.animated = false;
        this.hide();
      }
    } else {
      this.scrollBefore = scrolled;
      if (
        this.isInViewport(this.elem.nativeElement) &&
        this.animated === false
      ) {
        this.animated = true;
        this.animate();
      }
    }
  }

  ngAfterViewInit(): void {
    this.renderer.addClass(this.elem.nativeElement, 'a-opacity-0');

    if (scrollY > this.elem.nativeElement.getBoundingClientRect().bottom) {
      this.renderer.removeClass(this.elem.nativeElement, 'a-opacity-0');
    }
  }

  animate(): void {
    if (this.player) {
      this.player.destroy();
    }

    const animation = entryAnimation(this.animations, this.delayAnimations);
    const factory = this.builder.build(animation);
    const player = factory.create(this.elem.nativeElement);
    player.play();
  }

  hide(): void {
    if (this.player) {
      this.player.destroy();
    }

    const animation = animate(
      `0.5s ${this.delayAnimations}s cubic-bezier(0.250, 0.460, 0.450, 0.940)`,
      keyframes([style({ visibility: 'visible', opacity: 0 })])
    );

    const factory = this.builder.build(animation);
    const player = factory.create(this.elem.nativeElement);
    player.play();
  }

  isInViewport(element): boolean {
    const rect = element.getBoundingClientRect();

    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom - rect.bottom * this.elementViewPercents <= window.innerHeight
    );
  }
}

@NgModule({
  declarations: [AnimateElementOnScrollDirective],
  exports: [AnimateElementOnScrollDirective],
})
export class AnimateElementOnScrollModule {}
