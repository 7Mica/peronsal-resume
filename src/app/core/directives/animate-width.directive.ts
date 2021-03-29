import {
  animate,
  AnimationAnimateMetadata,
  AnimationBuilder,
  AnimationPlayer,
  keyframes,
  style,
} from '@angular/animations';
import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  NgModule,
} from '@angular/core';

@Directive({
  selector: '[animateWith]',
})
export class AnimateWidthDirective {
  @Input() percent = 0;
  player: AnimationPlayer | undefined;
  private elementViewPercents = 0.1;
  private animated = false;

  constructor(private elemRef: ElementRef, private builder: AnimationBuilder) {}

  @HostListener('window:scroll')
  onClick(): void {
    if (!this.animated && this.isInViewport(this.elemRef.nativeElement)) {
      this.animate();
      this.animated = true;
    }
  }

  animate(): void {
    if (this.player) {
      this.player.destroy();
    }

    const factory = this.builder.build(this.animation(this.percent));
    const player = factory.create(this.elemRef.nativeElement);
    player.play();
  }

  private animation(witdth: number): AnimationAnimateMetadata {
    return animate(
      `1s 0s cubic-bezier(0.250, 0.460, 0.450, 0.940)`,
      keyframes([style({ width: '0%' }), style({ width: `${witdth}%` })])
    );
  }

  private isInViewport(element): boolean {
    const rect = element.getBoundingClientRect();

    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom - rect.bottom * this.elementViewPercents <= window.innerHeight
    );
  }
}

@NgModule({
  declarations: [AnimateWidthDirective],
  exports: [AnimateWidthDirective],
})
export class AnimateWidthDirectiveModule {}
