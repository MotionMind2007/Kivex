import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const CircleArrowOutUpLeft = forwardRef<SVGSVGElement, IconProps>(
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
        <path d="m3 3 8 8" /><path d="M2 8V2.5a.5.5 0 0 1 .5-.5H8" /><path d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2" />
      </IconBase>
    );
  }
);

CircleArrowOutUpLeft.displayName = 'CircleArrowOutUpLeft';