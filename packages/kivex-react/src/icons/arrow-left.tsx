import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const ArrowLeft = forwardRef<SVGSVGElement, IconProps>(
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
        <path d="m12 5-6.646 6.646a.5.5 0 0 0 0 .708L12 19" /><path d="M6 12h13" />
      </IconBase>
    );
  }
);

ArrowLeft.displayName = 'ArrowLeft';