

import { 
    animate, 
    state, 
    style, 
    transition, 
    trigger, 
    animation, 
    keyframes, 
    AnimationReferenceMetadata 
  } from '@angular/animations';
  
  /** Time and timing curve for expand/collapse animations */
  export const EXPANSION_ANIMATION_TIMING = '225ms cubic-bezier(0.4, 0.0, 0.2, 1)';
  
  /** Animation that rotates the expansion indicator arrow */
  export const expansionIndicatorRotate = trigger('expansionIndicatorRotate', [
    state('collapsed', style({ transform: 'rotate(0deg)' })),
    state('expanded', style({ transform: 'rotate(180deg)' })),
    transition('expanded <=> collapsed', animate(EXPANSION_ANIMATION_TIMING))
  ]);
  
  /** Animation that expands and collapses the expansion content height */
  export const expansionHeight = trigger('expansionHeight', [
    state('collapsed', style({ height: '0px', minHeight: '0' })),
    state('expanded', style({ height: '*' })),
    transition('expanded <=> collapsed', animate(EXPANSION_ANIMATION_TIMING))
  ]);
  
  export const BOUNCE = animation(
    animate('{{ duration }}',
      keyframes([
        style({transformOrigin: 'center bottom', animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', transform: 'translate3d(0,0,0)', offset: 0}),
        style({transformOrigin: 'center bottom', animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', transform: 'translate3d(0,0,0)', offset: .2}),
        style({transformOrigin: 'center bottom', animationTimingFunction: 'cubic-bezier(0.755, 0.050, 0.855, 0.060)', transform: 'translate3d(0, -30px, 0)', offset: .4}),
        style({transformOrigin: 'center bottom', animationTimingFunction: 'cubic-bezier(0.755, 0.050, 0.855, 0.060)', transform: 'translate3d(0, -30px, 0)', offset: .43}),
        style({transformOrigin: 'center bottom', animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', transform: 'translate3d(0,0,0)', offset: .53}),
        style({transformOrigin: 'center bottom', animationTimingFunction: 'cubic-bezier(0.755, 0.050, 0.855, 0.060)', transform: 'translate3d(0, -15px, 0)', offset: .7}),
        style({transformOrigin: 'center bottom', animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', transform: 'translate3d(0,0,0)', offset: .8}),
        style({transformOrigin: 'center bottom', transform: 'translate3d(0, -4px, 0)', offset: .9}),
        style({transformOrigin: 'center bottom', animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', transform: 'translate3d(0,0,0)', offset: 1}),
      ])
    ),
    {
      params: {
        duration: '1s'
      }
    }
  );
  
  export const FLASH = animation(
    animate('{{ duration }}',
      keyframes([
        style({opacity: 1, offset: 0}),
        style({opacity: 0, offset: .25}),
        style({opacity: 1, offset: .5}),
        style({opacity: 0, offset: .75}),
        style({opacity: 1, offset: 1}),
      ])
    ),
    {
      params: {
        duration: '1s'
      }
    }
  );
  
  export const HEAD_SHAKE = animation(
    animate('{{ duration }}',
      keyframes([
        style({animationTimingFunction: 'ease-in-out', transform: 'translateX(0)', offset: 0}),
        style({animationTimingFunction: 'ease-in-out', transform: 'translateX(-6px) rotateY(-9deg)', offset: .065}),
        style({animationTimingFunction: 'ease-in-out', transform: 'translateX(5px) rotateY(7deg)', offset: .185}),
        style({animationTimingFunction: 'ease-in-out', transform: 'translateX(-3px) rotateY(-5deg)', offset: .315}),
        style({animationTimingFunction: 'ease-in-out', transform: 'translateX(2px) rotateY(3deg)', offset: .435}),
        style({animationTimingFunction: 'ease-in-out', transform: 'translateX(0)', offset: .5}),
      ])
    ),
    {
      params: {
        duration: '1s'
      }
    }
  );
  
  export const JELLO = animation(
    animate('{{ duration }}',
      keyframes([
        style({transformOrigin: 'center', transform: 'none', offset: 0}),
        style({transformOrigin: 'center', transform: 'none', offset: .111}),
        style({transformOrigin: 'center', transform: 'skewX(-12.5deg) skewY(-12.5deg)', offset: .222}),
        style({transformOrigin: 'center', transform: 'skewX(6.25deg) skewY(6.25deg)', offset: .333}),
        style({transformOrigin: 'center', transform: 'skewX(-3.125deg) skewY(-3.125deg)', offset: .444}),
        style({transformOrigin: 'center', transform: 'skewX(1.5625deg) skewY(1.5625deg)', offset: .555}),
        style({transformOrigin: 'center', transform: 'skewX(-0.78125deg) skewY(-0.78125deg)', offset: .666}),
        style({transformOrigin: 'center', transform: 'skewX(0.390625deg) skewY(0.390625deg)', offset: .777}),
        style({transformOrigin: 'center', transform: 'skewX(-0.1953125deg) skewY(-0.1953125deg)', offset: .888}),
        style({transformOrigin: 'center', transform: 'none', offset: 1}),
      ])
    ),
    {
      params: {
        duration: '1s'
      }
    }
  );
  
  export const PULSE = animation(
    animate('{{ duration }}',
      keyframes([
        style({transform: 'scale3d(1, 1, 1)', offset: 0}),
        style({transform: 'scale3d(1.05, 1.05, 1.05)', offset: .5}),
        style({transform: 'scale3d(1, 1, 1)', offset: 1}),
      ])
    ),
    {
      params: {
        duration: '1s'
      }
    }
  );
  
  export const RUBBER_BAND = animation(
    animate('{{ duration }}',
      keyframes([
        style({transform: 'scale3d(1, 1, 1)', offset: 0}),
        style({transform: 'scale3d(1.25, 0.75, 1)', offset: .3}),
        style({transform: 'scale3d(0.75, 1.25, 1)', offset: .4}),
        style({transform: 'scale3d(1.15, 0.85, 1)', offset: .5}),
        style({transform: 'scale3d(.95, 1.05, 1)', offset: .65}),
        style({transform: 'scale3d(1.05, .95, 1)', offset: .75}),
        style({transform: 'scale3d(1, 1, 1)', offset: 1}),
      ])
    ),
    {
      params: {
        duration: '1s'
      }
    }
  );
  
  export const SHAKE = animation(
    animate('{{ duration }}',
      keyframes([
        style({transform: 'translate3d(0, 0, 0)', offset: 0}),
        style({transform: 'translate3d(-10px, 0, 0)', offset: .1}),
        style({transform: 'translate3d(10px, 0, 0)', offset: .2}),
        style({transform: 'translate3d(-10px, 0, 0)', offset: .3}),
        style({transform: 'translate3d(10px, 0, 0)', offset: .4}),
        style({transform: 'translate3d(-10px, 0, 0)', offset: .5}),
        style({transform: 'translate3d(10px, 0, 0)', offset: .6}),
        style({transform: 'translate3d(-10px, 0, 0)', offset: .7}),
        style({transform: 'translate3d(10px, 0, 0)', offset: .8}),
        style({transform: 'translate3d(-10px, 0, 0)', offset: .9}),
        style({transform: 'translate3d(0, 0, 0)', offset: 1}),
      ])
    ),
    {
      params: {
        duration: '1s'
      }
    }
  );
  
  export const SWING = animation(
    animate('{{ duration }}',
      keyframes([
        style({transformOrigin: 'top center', transform: 'rotate3d(0, 0, 1, 15deg)', offset: .2}),
        style({transformOrigin: 'top center', transform: 'rotate3d(0, 0, 1, -10deg)', offset: .4}),
        style({transformOrigin: 'top center', transform: 'rotate3d(0, 0, 1, 5deg)', offset: .6}),
        style({transformOrigin: 'top center', transform: 'rotate3d(0, 0, 1, -5deg)', offset: .8}),
        style({transformOrigin: 'top center', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1}),
      ])
    ),
    {
      params: {
        duration: '1s'
      }
    }
  );
  
  export const TADA = animation(
    animate('{{ duration }}',
      keyframes([
        style({transform: 'scale3d(1, 1, 1)', offset: 0}),
        style({transform: 'scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg)', offset: .1}),
        style({transform: 'scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg)', offset: .2}),
        style({transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)', offset: .3}),
        style({transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)', offset: .4}),
        style({transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)', offset: .5}),
        style({transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)', offset: .6}),
        style({transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)', offset: .7}),
        style({transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)', offset: .8}),
        style({transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)', offset: .9}),
        style({transform: 'scale3d(1, 1, 1)', offset: 1}),
      ])
    ),
    {
      params: {
        duration: '1s'
      }
    }
  );
  
  export const WOBBLE = animation(
    animate('{{ duration }}',
      keyframes([
        style({transform: 'none', offset: 0}),
        style({transform: 'translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)', offset: .15}),
        style({transform: 'translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)', offset: .3}),
        style({transform: 'translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)', offset: .45}),
        style({transform: 'translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)', offset: .6}),
        style({transform: 'translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)', offset: .75}),
        style({transform: 'none', offset: 1}),
      ])
    ),
    {
      params: {
        duration: '1s'
      }
    }
  );
  
  /**
   * Bouncing entrances animations
   */
  
  export const BOUNCE_IN = animation(
    animate('{{ duration }}',
      keyframes([
        style({animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', opacity: 0, transform: 'scale3d(.3, .3, .3)', offset: 0}),
        style({animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', transform: 'scale3d(1.1, 1.1, 1.1)', offset: .2}),
        style({animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', transform: 'scale3d(.9, .9, .9)', offset: .4}),
        style({animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', opacity: 1, 
          transform: 'scale3d(1.03, 1.03, 1.03)', offset: .6}),
        style({animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', transform: 'scale3d(.97, .97, .97)', offset: .8}),
        style({animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', opacity: 1, transform: 'scale3d(1, 1, 1)', offset: 1}),
      ])
    ),
    {
      params: {
        duration: '1s'
      }
    }
  );
  
  export const BOUNCE_IN_DOWN = animation(
    animate('{{ duration }}',
      keyframes([
        style({animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', opacity: 0, 
          transform: 'translate3d(0, -3000px, 0)', offset: 0}),
        style({animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', opacity: 1, 
          transform: 'translate3d(0, 25px, 0)', offset: .6}),
        style({animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', transform: 'translate3d(0, -10px, 0)', offset: .75}),
        style({animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', transform: 'translate3d(0, 5px, 0)', offset: .9}),
        style({animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', transform: 'none', offset: 1}),
      ])
    ),
    {
      params: {
        duration: '1s'
      }
    }
  );
  
  export const BOUNCE_IN_LEFT = animation(
    animate('{{ duration }}',
      keyframes([
        style({animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', opacity: 0, 
        transform: 'translate3d(-3000px, 0,  0)', offset: 0}),
        style({animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', opacity: 1, 
        transform: 'translate3d(25px, 0, 0)', offset: .6}),
        style({animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', transform: 'translate3d(-10px, 0, 0)', offset: .75}),
        style({animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', transform: 'translate3d(5px, 0, 0)', offset: .9}),
        style({animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', transform: 'none', offset: 1}),
      ])
    ),
    {
      params: {
        duration: '1s'
      }
    }
  );
  
  export const BOUNCE_IN_RIGHT = animation(
    animate('{{ duration }}',
      keyframes([
        style({animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', opacity: 0, 
        transform: 'translate3d(3000px, 0,  0)', offset: 0}),
        style({animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', opacity: 1, 
        transform: 'translate3d(-25px, 0, 0)', offset: .6}),
        style({animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', transform: 'translate3d(10px, 0, 0)', offset: .75}),
        style({animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', transform: 'translate3d(-5px, 0, 0)', offset: .9}),
        style({animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', transform: 'none', offset: 1}),
      ])
    ),
    {
      params: {
        duration: '1s'
      }
    }
  );
  
  export const BOUNCE_IN_UP = animation(
    animate('{{ duration }}',
      keyframes([
        style({animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', opacity: 0, 
        transform: 'translate3d(0, 3000px, 0)', offset: 0}),
        style({animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', opacity: 1, 
        transform: 'translate3d(0, -20px, 0)', offset: .6}),
        style({animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', transform: 'translate3d(0, 10px, 0)', offset: .75}),
        style({animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', transform: 'translate3d(0, -5px, 0)', offset: .9}),
        style({animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', transform: 'none', offset: 1}),
      ])
    ),
    {
      params: {
        duration: '1s'
      }
    }
  );
  
  /**
   * Bouncing exits animations
   */
  
  export const BOUNCE_OUT = animation(
    animate('{{ duration }}',
      keyframes([
        style({transform: 'scale3d(.9, .9, .9)', offset: .2}),
        style({opacity: 1, transform: 'scale3d(1.1, 1.1, 1.1)', offset: .5}),
        style({opacity: 1, transform: 'scale3d(1.1, 1.1, 1.1)', offset: .55}),
        style({opacity: 0, transform: 'scale3d(.3, .3, .3)', offset: 1}),
      ])
    ),
    {
      params: {
        duration: '1s'
      }
    }
  );
  
  export const BOUNCE_OUT_DOWN = animation(
    animate('{{ duration }}',
      keyframes([
        style({transform: 'translate3d(0, 10px, 0)', offset: .2}),
        style({opacity: 1, transform: 'translate3d(0, -20px, 0)', offset: .4}),
        style({opacity: 1, transform: 'translate3d(0, -20px, 0)', offset: .45}),
        style({opacity: 0, transform: 'translate3d(0, 2000px, 0)', offset: 1}),
      ])
    ),
    {
      params: {
        duration: '1s'
      }
    }
  );
  
  export const BOUNCE_OUT_LEFT = animation(
    animate('{{ duration }}',
      keyframes([
        style({opacity: 1, transform: 'translate3d(20px, 0, 0)', offset: .2}),
        style({opacity: 0, transform: 'translate3d(-2000px, 0, 0)', offset: 1}),
      ])
    ),
    {
      params: {
        duration: '1s'
      }
    }
  );
  
  export const BOUNCE_OUT_RIGHT = animation(
    animate('{{ duration }}',
      keyframes([
        style({opacity: 1, transform: 'translate3d(-20px, 0, 0)', offset: .2}),
        style({opacity: 0, transform: 'translate3d(2000px, 0, 0)', offset: 1}),
      ])
    ),
    {
      params: {
        duration: '1s'
      }
    }
  );
  
  export const BOUNCE_OUT_UP = animation(
    animate('{{ duration }}',
      keyframes([
        style({transform: 'translate3d(0, -10px, 0)', offset: .2}),
        style({opacity: 1, transform: 'translate3d(0, 20px, 0)', offset: .4}),
        style({opacity: 1, transform: 'translate3d(0, 20px, 0)', offset: .45}),
        style({opacity: 0, transform: 'translate3d(0, -2000px, 0)', offset: 1}),
      ])
    ),
    {
      params: {
        duration: '1s'
      }
    }
  );
  
  /**
   * Fading entrances animations
   */
  
  export const FADE_IN = animation(
    animate('{{ duration }}',
      keyframes([
        style({opacity: 0, offset: 0}),
        style({opacity: 1, offset: 1}),
      ])
    ),
    {
      params: {
        duration: '1s'
      }
    }
  );
  
  export const FADE_IN_DOWN = animation(
    animate('{{ duration }}',
      keyframes([
        style({opacity: 0, transform: 'translate3d(0, -100%, 0)', offset: 0}),
        style({opacity: 1, transform: 'none', offset: 1}),
      ])
    ),
    {
      params: {
        duration: '1s'
      }
    }
  );
  
  export const FADE_IN_DOWN_BIG = animation(
    animate('{{ duration }}',
      keyframes([
        style({opacity: 0, transform: 'translate3d(0, -2000px, 0)', offset: 0}),
        style({opacity: 1, transform: 'none', offset: 1}),
      ])
    ),
    {
      params: {
        duration: '1s'
      }
    }
  );
  
  export const FADE_IN_LEFT = animation(
    animate('{{ duration }}',
      keyframes([
        style({opacity: 0, transform: 'translate3d(-100%, 0, 0)', offset: 0}),
        style({opacity: 1, transform: 'none', offset: 1}),
      ])
    ),
    {
      params: {
        duration: '1s'
      }
    }
  );
  
  export const FADE_IN_LEFT_BIG = animation(
    animate('{{ duration }}',
      keyframes([
        style({opacity: 0, transform: 'translate3d(-2000px, 0, 0)', offset: 0}),
        style({opacity: 1, transform: 'none', offset: 1}),
      ])
    ),
    {
      params: {
        duration: '1s'
      }
    }
  );
  
  export const FADE_IN_RIGHT = animation(
    animate('{{ duration }}',
      keyframes([
        style({opacity: 0, transform: 'translate3d(100%, 0, 0)', offset: 0}),
        style({opacity: 1, transform: 'none', offset: 1}),
      ])
    ),
    {
      params: {
        duration: '1s'
      }
    }
  );
  
  export const FADE_IN_RIGHT_BIG = animation(
    animate('{{ duration }}',
      keyframes([
        style({opacity: 0, transform: 'translate3d(2000px, 0, 0)', offset: 0}),
        style({opacity: 1, transform: 'none', offset: 1}),
      ])
    ),
    {
      params: {
        duration: '1s'
      }
    }
  );
  
  export const FADE_IN_UP = animation(
    animate('{{ duration }}',
      keyframes([
        style({opacity: 0, transform: 'translate3d(0, 100%, 0)', offset: 0}),
        style({opacity: 1, transform: 'none', offset: 1}),
      ])
    ),
    {
      params: {
        duration: '1s'
      }
    }
  );
  
  export const FADE_IN_UP_BIG = animation(
    animate('{{ duration }}',
      keyframes([
        style({opacity: 0, transform: 'translate3d(0, 2000px, 0)', offset: 0}),
        style({opacity: 1, transform: 'none', offset: 1}),
      ])
    ),
    {
      params: {
        duration: '1s'
      }
    }
  );
  
  /**
   * Fading exits animations
   */
  
  export const FADE_OUT = animation(
    animate('{{ duration }}',
      keyframes([
        style({opacity: 1, offset: 0}),
        style({opacity: 0, offset: 1}),
      ])
    ),
    {
      params: {
        duration: '1s'
      }
    }
  );
  
  export const FADE_OUT_DOWN = animation(
    animate('{{ duration }}',
      keyframes([
        style({opacity: 1, offset: 0}),
        style({opacity: 0, transform: 'translate3d(0, 100%, 0)', offset: 1}),
      ])
    ),
    {
      params: {
        duration: '1s'
      }
    }
  );
  
  export const FADE_OUT_DOWN_BIG = animation(
    animate('{{ duration }}',
      keyframes([
        style({opacity: 1, offset: 0}),
        style({opacity: 0, transform: 'translate3d(0, 2000px, 0)', offset: 1}),
      ])
    ),
    {
      params: {
        duration: '1s'
      }
    }
  );
  
  export const FADE_OUT_LEFT = animation(
    animate('{{ duration }}',
      keyframes([
        style({opacity: 1, offset: 0}),
        style({opacity: 0, transform: 'translate3d(-100%, 0, 0)', offset: 1}),
      ])
    ),
    {
      params: {
        duration: '1s'
      }
    }
  );
  
  export const FADE_OUT_LEFT_BIG = animation(
    animate('{{ duration }}',
      keyframes([
        style({opacity: 1, offset: 0}),
        style({opacity: 0, transform: 'translate3d(-2000px, 0, 0)', offset: 1}),
      ])
    ),
    {
      params: {
        duration: '1s'
      }
    }
  );
  
  export const FADE_OUT_RIGHT = animation(
    animate('{{ duration }}',
      keyframes([
        style({opacity: 1, offset: 0}),
        style({opacity: 0, transform: 'translate3d(100%, 0, 0)', offset: 1}),
      ])
    ),
    {
      params: {
        duration: '1s'
      }
    }
  );
  
  export const FADE_OUT_RIGHT_BIG = animation(
    animate('{{ duration }}',
      keyframes([
        style({opacity: 1, offset: 0}),
        style({opacity: 0, transform: 'translate3d(2000px, 0, 0)', offset: 1}),
      ])
    ),
    {
      params: {
        duration: '1s'
      }
    }
  );
  
  export const FADE_OUT_UP = animation(
    animate('{{ duration }}',
      keyframes([
        style({opacity: 1, offset: 0}),
        style({opacity: 0, transform: 'translate3d(0, -100%, 0)', offset: 1}),
      ])
    ),
    {
      params: {
        duration: '1s'
      }
    }
  );
  
  export const FADE_OUT_UP_BIG = animation(
    animate('{{ duration }}',
      keyframes([
        style({opacity: 1, offset: 0}),
        style({opacity: 0, transform: 'translate3d(0, -2000px, 0)', offset: 1}),
      ])
    ),
    {
      params: {
        duration: '1s'
      }
    }
  );
  
  /**
   * Flippers animations
   */
  
  export const FLIP = animation(
    animate('{{ duration }}',
      keyframes([
        style({backfaceVisibility: 'visible', transform: 'perspective(400px) rotate3d(0, 1, 0, -360deg)', 
          animationTimingFunction: 'ease-out', offset: 0}),
        style({backfaceVisibility: 'visible', transform: 'perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg)', 
          animationTimingFunction: 'ease-out', offset: .4}),
        style({backfaceVisibility: 'visible', transform: 'perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg)', 
          animationTimingFunction: 'ease-in', offset: .5}),
        style({backfaceVisibility: 'visible', transform: 'perspective(400px) scale3d(.95, .95, .95)', 
          animationTimingFunction: 'ease-in', offset: .8}),
        style({backfaceVisibility: 'visible', transform: 'perspective(400px)', animationTimingFunction: 'ease-in', offset: 1}),
      ])
    ),
    {
      params: {
        duration: '1s'
      }
    }
  );
  
  export const FLIP_IN_X = animation(
    animate('{{ duration }}',
      keyframes([
        style({opacity: 0, backfaceVisibility: 'visible !important', transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)', 
          animationTimingFunction: 'ease-in', offset: 0}),
        style({backfaceVisibility: 'visible !important', transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)', animationTimingFunction: 'ease-in', offset: .4}),
        style({opacity: 1, backfaceVisibility: 'visible !important', transform: 'perspective(400px) rotate3d(1, 0, 0, 10deg)', offset: .6}),
        style({backfaceVisibility: 'visible !important', transform: 'perspective(400px) rotate3d(1, 0, 0, -5deg)', offset: .8}),
        style({backfaceVisibility: 'visible !important', transform: 'perspective(400px)', offset: 1}),
      ])
    ),
    {
      params: {
        duration: '1s'
      }
    }
  );
  
  export const FLIP_IN_Y = animation(
    animate('{{ duration }}',
      keyframes([
        style({opacity: 0, backfaceVisibility: 'visible !important', transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)', 
          animationTimingFunction: 'ease-in', offset: 0}),
        style({backfaceVisibility: 'visible !important', transform: 'perspective(400px) rotate3d(0, 1, 0, -20deg)', animationTimingFunction: 'ease-in', offset: .4}),
        style({opacity: 1, backfaceVisibility: 'visible !important', transform: 'perspective(400px) rotate3d(1, 0, 0, 10deg)', offset: .6}),
        style({backfaceVisibility: 'visible !important', transform: 'perspective(400px) rotate3d(0, 1, 0, -5deg)', offset: .8}),
        style({backfaceVisibility: 'visible !important', transform: 'perspective(400px)', offset: 1}),
      ])
    ),
    {
      params: {
        duration: '1s'
      }
    }
  );
  
  export const FLIP_OUT_X = animation(
    animate('{{ duration }}',
      keyframes([
        style({backfaceVisibility: 'visible !important', transform: 'perspective(400px)', offset: 0}),
        style({opacity: 1, backfaceVisibility: 'visible !important', transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)', offset: .3}),
        style({opacity: 0, backfaceVisibility: 'visible !important', transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)', offset: 1}),
      ])
    ),
    {
      params: {
        duration: '1s'
      }
    }
  );
  
  export const FLIP_OUT_Y = animation(
    animate('{{ duration }}',
      keyframes([
        style({backfaceVisibility: 'visible !important', transform: 'perspective(400px)', offset: 0}),
        style({opacity: 1, backfaceVisibility: 'visible !important', transform: 'perspective(400px) rotate3d(0, 1, 0, -15deg)', offset: .3}),
        style({opacity: 0, backfaceVisibility: 'visible !important', transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)', offset: 1}),
      ])
    ),
    {
      params: {
        duration: '1s'
      }
    }
  );
  
  /**
   * Lightspeed animations
   */
  
  export const LIGHT_SPEED_IN = animation(
    animate('{{ duration }}',
      keyframes([
        style({opacity: 0, animationTimingFunction: 'ease-out', transform: 'translate3d(100%, 0, 0) skewX(-30deg)', offset: 0}),
        style({opacity: 1, animationTimingFunction: 'ease-out', transform: 'skewX(20deg)', offset: .6}),
        style({opacity: 1, animationTimingFunction: 'ease-out', transform: 'skewX(-5deg)', offset: .8}),
        style({opacity: 1, animationTimingFunction: 'ease-out', transform: 'none', offset: 1}),
      ])
    ),
    {
      params: {
        duration: '1s'
      }
    }
  );
  
  export const LIGHT_SPEED_OUT = animation(
    animate('{{ duration }}',
      keyframes([
        style({opacity: 1, animationTimingFunction: 'ease-in', offset: 0}),
        style({opacity: 0, animationTimingFunction: 'ease-in', transform: 'translate3d(100%, 0, 0) skewX(30deg)', offset: 1}),
      ])
    ),
    {
      params: {
        duration: '1s'
      }
    }
  );
  
  /**
   * Rotating entrances animations
   */
  
  export const ROTATE_IN = animation(
    animate('{{ duration }}',
      keyframes([
        style({opacity: 0, transformOrigin: 'center', transform: 'rotate3d(0, 0, 1, -200deg)', offset: 0}),
        style({opacity: 1, transformOrigin: 'center', transform: 'none', offset: 1}),
      ])
    ),
    {
      params: {
        duration: '1s'
      }
    }
  );
  
  export const ROTATE_IN_DOWN_LEFT = animation(
    animate('{{ duration }}',
      keyframes([
        style({opacity: 0, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, -45deg)', offset: 0}),
        style({opacity: 1, transformOrigin: 'left bottom', transform: 'none', offset: 1}),
      ])
    ),
    {
      params: {
        duration: '1s'
      }
    }
  );
  
  export const ROTATE_IN_DOWN_RIGHT = animation(
    animate('{{ duration }}',
      keyframes([
        style({opacity: 0, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, 45deg)', offset: 0}),
        style({opacity: 1, transformOrigin: 'right bottom', transform: 'none', offset: 1}),
      ])
    ),
    {
      params: {
        duration: '1s'
      }
    }
  );
  
  export const ROTATE_IN_UP_LEFT = animation(
    animate('{{ duration }}',
      keyframes([
        style({opacity: 0, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, 45deg)', offset: 0}),
        style({opacity: 1, transformOrigin: 'left bottom', transform: 'none', offset: 1}),
      ])
    ),
    {
      params: {
        duration: '1s'
      }
    }
  );
  
  export const ROTATE_IN_UP_RIGHT = animation(
    animate('{{ duration }}',
      keyframes([
        style({opacity: 0, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, -90deg)', offset: 0}),
        style({opacity: 1, transformOrigin: 'right bottom', transform: 'none', offset: 1}),
      ])
    ),
    {
      params: {
        duration: '1s'
      }
    }
  );
  
  /**
   * Rotating exits animations
   */
  
  export const ROTATE_OUT = animation(
    animate('{{ duration }}',
      keyframes([
        style({opacity: 1, transformOrigin: 'center', transform: 'rotate3d(0, 0, 1, 200deg)', offset: 0}),
        style({opacity: 0, transformOrigin: 'center', transform: 'none', offset: 1}),
      ])
    ),
    {
      params: {
        duration: '1s'
      }
    }
  );
  
  export const ROTATE_OUT_DOWN_LEFT = animation(
    animate('{{ duration }}',
      keyframes([
        style({opacity: 1, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, 45deg)', offset: 0}),
        style({opacity: 0, transformOrigin: 'left bottom', transform: 'none', offset: 1}),
      ])
    ),
    {
      params: {
        duration: '1s'
      }
    }
  );
  
  export const ROTATE_OUT_DOWN_RIGHT = animation(
    animate('{{ duration }}',
      keyframes([
        style({opacity: 1, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, -45deg)', offset: 0}),
        style({opacity: 0, transformOrigin: 'right bottom', transform: 'none', offset: 1}),
      ])
    ),
    {
      params: {
        duration: '1s'
      }
    }
  );
  
  export const ROTATE_OUT_UP_LEFT = animation(
    animate('{{ duration }}',
      keyframes([
        style({opacity: 1, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, -45deg)', offset: 0}),
        style({opacity: 0, transformOrigin: 'left bottom', transform: 'none', offset: 1}),
      ])
    ),
    {
      params: {
        duration: '1s'
      }
    }
  );
  
  export const ROTATE_OUT_UP_RIGHT = animation(
    animate('{{ duration }}',
      keyframes([
        style({opacity: 1, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, 90deg)', offset: 0}),
        style({opacity: 0, transformOrigin: 'right bottom', transform: 'none', offset: 1}),
      ])
    ),
    {
      params: {
        duration: '1s'
      }
    }
  );
  
  /**
   * Sliding entrances animations
   */
  export const SLIDE_DOWN = animation(
    animate('{{ duration }}',
      keyframes([
        style({visibility: 'hidden', 'max-height': '0'}),
        style({visibility: 'visible', 'max-height': '800px'}),
      ])
    ),
    {
      params: {
        duration: '1s'
      }
    }
  );
  
  export const SLIDE_UP = animation(
    animate('{{ duration }}',
      keyframes([
        style({visibility: 'visible', 'max-height': '800px'}),
        style({visibility: 'hidden', 'max-height': '0'}),
      ])
    ),
    {
      params: {
        duration: '1s'
      }
    }
  );
  
  export const SLIDE_IN_DOWN = animation(
    animate('{{ duration }}',
      keyframes([
        style({visibility: 'visible', transform: 'translate3d(0, -100%, 0)', offset: 0}),
        style({transform: 'translate3d(0, 0, 0)', offset: 1}),
      ])
    ),
    {
      params: {
        duration: '1s'
      }
    }
  );
  
  export const SLIDE_IN_LEFT = animation(
    animate('{{ duration }}',
      keyframes([
        style({visibility: 'visible', transform: 'translate3d(-100%, 0, 0)', offset: 0}),
        style({transform: 'translate3d(0, 0, 0)', offset: 1}),
      ])
    ),
    {
      params: {
        duration: '1s'
      }
    }
  );
  
  export const SLIDE_IN_RIGHT = animation(
    animate('{{ duration }}',
      keyframes([
        style({visibility: 'visible', transform: 'translate3d(100%, 0, 0)', offset: 0}),
        style({transform: 'translate3d(0, 0, 0)', offset: 1}),
      ])
    ),
    {
      params: {
        duration: '1s'
      }
    }
  );
  
  export const SLIDE_IN_UP = animation(
    animate('{{ duration }}',
      keyframes([
        style({visibility: 'visible', transform: 'translate3d(0, 100%, 0)', offset: 0}),
        style({transform: 'translate3d(0, 0, 0)', offset: 1}),
      ])
    ),
    {
      params: {
        duration: '1s'
      }
    }
  );
  
  /**
   * Sliding exits animations
   */
  
  export const SLIDE_OUT_DOWN = animation(
    animate('{{ duration }}',
      keyframes([
        style({transform: 'translate3d(0, 0, 0)', offset: 0}),
        style({visibility: 'hidden', transform: 'translate3d(0, 100%, 0)', offset: 1}),
      ])
    ),
    {
      params: {
        duration: '1s'
      }
    }
  );
  
  export const SLIDE_OUT_LEFT = animation(
    animate('{{ duration }}',
      keyframes([
        style({transform: 'translate3d(0, 0, 0)', offset: 0}),
        style({visibility: 'hidden', transform: 'translate3d(-100%, 0, 0)', offset: 1}),
      ])
    ),
    {
      params: {
        duration: '1s'
      }
    }
  );
  
  export const SLIDE_OUT_RIGHT = animation(
    animate('{{ duration }}',
      keyframes([
        style({transform: 'translate3d(0, 0, 0)', offset: 0}),
        style({visibility: 'hidden', transform: 'translate3d(100%, 0, 0)', offset: 1}),
      ])
    ),
    {
      params: {
        duration: '1s'
      }
    }
  );
  
  export const SLIDE_OUT_UP = animation(
    animate('{{ duration }}',
      keyframes([
        style({transform: 'translate3d(0, 0, 0)', offset: 0}),
        style({visibility: 'hidden', transform: 'translate3d(0, -100%, 0)', offset: 1}),
      ])
    ),
    {
      params: {
        duration: '1s'
      }
    }
  );
  
  /**
   * Specials animations
   */
  
  export const HINGE = animation(
    animate('{{ duration }}',
      keyframes([
        style({transformOrigin: 'top left', animationTimingFunction: 'ease-in-out', offset: 0}),
        style({transformOrigin: 'top left', animationTimingFunction: 'ease-in-out', transform: 'rotate3d(0, 0, 1, 80deg)', offset: .2}),
        style({opacity: 1, transformOrigin: 'top left', animationTimingFunction: 'ease-in-out', 
          transform: 'rotate3d(0, 0, 1, 60deg)', offset: .4}),
        style({transformOrigin: 'top left', animationTimingFunction: 'ease-in-out', transform: 'rotate3d(0, 0, 1, 80deg)', offset: .6}),
        style({opacity: 1, transformOrigin: 'top left', animationTimingFunction: 'ease-in-out', 
          transform: 'rotate3d(0, 0, 1, 60deg)', offset: .8}),
        style({opacity: 0, transform: 'translate3d(0, 700px, 0)', offset: 1}),
      ])
    ),
    {
      params: {
        duration: '1s'
      }
    }
  );
  
  export const JACK_IN_THE_BOX = animation(
    animate('{{ duration }}',
      keyframes([
        style({opacity: 0, transform: 'scale(0.1) rotate(30deg)', transformOrigin: 'center bottom', offset: 0}),
        style({transform: 'rotate(-10deg)', offset: .5}),
        style({transform: 'rotate(3deg)', offset: .7}),
        style({transform: 'scale(1)', offset: 1}),
      ])
    ),
    {
      params: {
        duration: '1s'
      }
    }
  );
  
  export const ROLL_IN = animation(
    animate('{{ duration }}',
      keyframes([
        style({opacity: 0, transform: 'translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)', offset: 0}),
        style({opacity: 1, transform: 'none', offset: 1}),
      ])
    ),
    {
      params: {
        duration: '1s'
      }
    }
  );
  
  export const ROLL_OUT = animation(
    animate('{{ duration }}',
      keyframes([
        style({opacity: 1, offset: 0}),
        style({opacity: 0, transform: 'translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)', offset: 1}),
      ])
    ),
    {
      params: {
        duration: '1s'
      }
    }
  );
  
  /**
   * Zooming entrances animations
   */
  
  export const ZOOM_IN = animation(
    animate('{{ duration }}',
      keyframes([
        style({opacity: 0, transform: 'scale3d(.3, .3, .3)', offset: 0}),
        style({opacity: 1, transform: 'scale3d(1, 1, 1)', offset: .5}),
        // style({opac offset: 1}),
      ])
    ),
    {
      params: {
        duration: '1s'
      }
    }
  );
  
  export const ZOOM_IN_DOWN = animation(
    animate('{{ duration }}',
      keyframes([
        style({opacity: 0, animationTimingFunction: 'cubic-bezier(0.550, 0.055, 0.675, 0.190)', transform: 'scale3d(.1, .1, .1) translate3d(0, -1000px, 0)', offset: 0}),
        style({opacity: 1, animationTimingFunction: 'cubic-bezier(0.175, 0.885, 0.320, 1)', transform: 'scale3d(.1, .1, .1) translate3d(0, 60px, 0)', offset: .6}),
      ])
    ),
    {
      params: {
        duration: '1s'
      }
    }
  );
  
  export const ZOOM_IN_LEFT = animation(
    animate('{{ duration }}',
      keyframes([
        style({opacity: 0, animationTimingFunction: 'cubic-bezier(0.550, 0.055, 0.675, 0.190)', transform: 'scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)', offset: 0}),
        style({opacity: 1, animationTimingFunction: 'cubic-bezier(0.175, 0.885, 0.320, 1)', transform: 'scale3d(.475, .475, .475) translate3d(10px, 0, 0)', offset: .6}),
      ])
    ),
    {
      params: {
        duration: '1s'
      }
    }
  );
  
  export const ZOOM_IN_RIGHT = animation(
    animate('{{ duration }}',
      keyframes([
        style({opacity: 0, animationTimingFunction: 'cubic-bezier(0.550, 0.055, 0.675, 0.190)', transform: 'scale3d(.1, .1, .1) translate3d(1000px, 0, 0)', offset: 0}),
        style({opacity: 1, animationTimingFunction: 'cubic-bezier(0.175, 0.885, 0.320, 1)', transform: 'scale3d(.475, .475, .475) translate3d(-10px, 0, 0)', offset: .6}),
      ])
    ),
    {
      params: {
        duration: '1s'
      }
    }
  );
  
  export const ZOOM_IN_UP = animation(
    animate('{{ duration }}',
      keyframes([
        style({opacity: 0, animationTimingFunction: 'cubic-bezier(0.550, 0.055, 0.675, 0.190)', transform: 'scale3d(.1, .1, .1) translate3d(0, 1000px, 0)', offset: 0}),
        style({opacity: 1, animationTimingFunction: 'cubic-bezier(0.175, 0.885, 0.320, 1)', transform: 'scale3d(.475, .475, .475) translate3d(0, -60px, 0)', offset: .6}),
      ])
    ),
    {
      params: {
        duration: '1s'
      }
    }
  );
  
  /**
   * Zooming exits animations
   */
  
  export const ZOOM_OUT = animation(
    animate('{{ duration }}',
      keyframes([
        style({opacity: 1, offset: 0}),
        style({opacity: 0, transform: 'scale3d(.3, .3, .3)', offset: .5}),
        style({opacity: 0, offset: 1}),
      ])
    ),
    {
      params: {
        duration: '1s'
      }
    }
  );
  
  export const ZOOM_OUT_DOWN = animation(
    animate('{{ duration }}',
      keyframes([
        style({opacity: 1, animationTimingFunction: 'cubic-bezier(0.550, 0.055, 0.675, 0.190)', transform: 'scale3d(.475, .475, .475) translate3d(0, -60px, 0)', offset: .4}),
        style({opacity: 0, animationTimingFunction: 'cubic-bezier(0.175, 0.885, 0.320, 1)', transformOrigin: 'center bottom', transform: 'scale3d(.1, .1, .1) translate3d(0, 2000px, 0)', offset: 1}),
      ])
    ),
    {
      params: {
        duration: '1s'
      }
    }
  );
  
  export const ZOOM_OUT_LEFT = animation(
    animate('{{ duration }}',
      keyframes([
        style({opacity: 1, transform: 'scale3d(.475, .475, .475) translate3d(42px, 0, 0)', offset: .4}),
        style({opacity: 0, transformOrigin: 'left center', transform: 'scale(.1) translate3d(-2000px, 0, 0)', offset: 1}),
      ])
    ),
    {
      params: {
        duration: '1s'
      }
    }
  );
  
  export const ZOOM_OUT_RIGHT = animation(
    animate('{{ duration }}',
      keyframes([
        style({opacity: 1, transform: 'scale3d(.475, .475, .475) translate3d(-42px, 0, 0)', offset: .4}),
        style({opacity: 0, transformOrigin: 'right center', transform: 'scale(.1) translate3d(2000px, 0, 0)', offset: 1}),
      ])
    ),
    {
      params: {
        duration: '1s'
      }
    }
  );
  
  export const ZOOM_OUT_UP = animation(
    animate('{{ duration }}',
      keyframes([
        style({opacity: 1, animationTimingFunction: 'cubic-bezier(0.550, 0.055, 0.675, 0.190)', transform: 'scale3d(.475, .475, .475) translate3d(0, 60px, 0)', offset: .4}),
        style({opacity: 0, animationTimingFunction: 'cubic-bezier(0.175, 0.885, 0.320, 1)', transformOrigin: 'center bottom', transform: 'scale3d(.1, .1, .1) translate3d(0, -2000px, 0)', offset: 1}),
      ])
    ),
    {
      params: {
        duration: '1s'
      }
    }
  );
  
  
  
  
  
  