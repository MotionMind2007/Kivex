import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const CircleArrowOutUpRight = forwardRef<SVGSVGElement, IconProps>(
  (
    { 
  
        size = 24, 
        color = 'currentColor', 
        strokeWidth = 2,
        ...props
        },
        ref
  ) => {
    return (
      <IconBase
        ref={ref}
        size={size}
        color={color}
        strokeWidth={strokeWidth}
        {...props}
      >
        <path d="M16 2h5.5a.5.5 0 0 1 .5.5V8" /><path d="m13 11 8-8" /><path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2" />
      </IconBase>
    );
  }
);

CircleArrowOutUpRight.displayName = 'CircleArrowOutUpRight';