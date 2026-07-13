import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const Angry = forwardRef<SVGSVGElement, IconProps>(
  (
    { 
  
        size = 24, 
        color = 'currentColor', 
        strokeWidth = 2 
        
        },
        ref
  ) => {
    return (
      <IconBase
        ref={ref}
        size={size}
        color={color}
        strokeWidth={strokeWidth}
      >
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z" /><path d="M8 10.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z" /><path d="M16 10.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z" /><path d="M8 16c1.769-3.095 6.231-3.095 8 0" /><path d="m7 7 2 1" /><path d="m15 8 2-1" />
      </IconBase>
    );
  }
);

Angry.displayName = 'Angry';