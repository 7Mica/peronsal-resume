import {
  style,
  animate,
  keyframes,
  AnimationAnimateMetadata,
  transition,
} from '@angular/animations';

/**********  Entries Animations **********/

export const fadeInOutTransition = [
  transition(':enter', [
    style({ opacity: '0' }),
    animate(250, style({ opacity: '1' })),
  ]),
  transition(':leave', [
    style({ opacity: '*' }),
    animate(250, style({ opacity: '0' })),
  ]),
];

export const scaleAndOpaque = [
  transition(':enter', [
    style({ transform: 'scale(0)', opacity: 0 }),
    animate(250, style({ transform: 'scale(1)', opacity: 1 })),
  ]),
  transition(':leave', [
    style({ transform: '*', opacity: '*' }),
    animate(250, style({ transform: 'scale(0)', opacity: 0 })),
  ]),
];

export const entryAnimation = (
  name: string,
  delay = 0.1
): AnimationAnimateMetadata => {
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
      return animate(
        `0.5s ${delay}s cubic-bezier(0.250, 0.460, 0.450, 0.940)`,
        keyframes([
          style({ visibility: 'visible', opacity: 0 }),
          style({ transform: 'translateX(50%)' }),
          style({ transform: 'translateX(-50%)', opacity: 1 }),
        ])
      );
  }
};
