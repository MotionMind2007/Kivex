import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const ArrowRightToLine = forwardRef<SVGSVGElement, IconProps>(
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
        <path d="M3 12.051h12" /><path d="M21 5v14" /><path d="m11 6 5.646 5.646a.5.5 0 0 1 0 .708L11 18" />
      </IconBase>
    );
  }
);

ArrowRightToLine.displayName = 'ArrowRightToLine';