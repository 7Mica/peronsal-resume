import {
  style,
  animate,
  keyframes,
  AnimationAnimateMetadata,
} from '@angular/animations';

/**********  Entries Animations **********/

export function entryAnimation(
  name: string,
  delay = 0.1
): AnimationAnimateMetadata {
  switch (name) {
    case 'scaleInTop':
      return animate(
        `0.5s ${delay}s cubic-bezier(0.250, 0.460, 0.450, 0.940)`,
        keyframes([
          style({ visibility: 'visible', opacity: 0 }),
          style({ transform: 'scale(0)', transformOrigin: '50% 0%' }),
          style({
            transform: 'scale(1)',
            transformOrigin: '50% 0%',
            opacity: 1,
          }),
        ])
      );

    case 'scaleInHorCenter':
      return animate(
        `0.5s ${delay}s cubic-bezier(0.250, 0.460, 0.450, 0.940)`,
        keyframes([
          style({ visibility: 'visible', opacity: 0 }),
          style({ transform: 'scaleX(0)' }),
          style({ transform: 'scaleX(1)', opacity: 1 }),
        ])
      );

    case 'slideFromLeft':
      return animate(
        `0.5s ${delay}s cubic-bezier(0.250, 0.460, 0.450, 0.940)`,
        keyframes([
          style({ visibility: 'visible', opacity: 0 }),
          style({ transform: 'translateX(-50%)' }),
          style({ transform: 'translateX(50%)', opacity: 1 }),
        ])
      );

    case 'slideFromRight':
      return animate(
        `0.5s ${delay}s cubic-bezier(0.250, 0.460, 0.450, 0.940)`,
        keyframes([
          style({ visibility: 'visible', opacity: 0 }),
          style({ transform: 'translateX(50%)' }),
          style({ transform: 'translateX(-50%)', opacity: 1 }),
        ])
      );
    default:
      return null;
  }
}
