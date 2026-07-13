import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const ChevronsDownUp = forwardRef<SVGSVGElement, IconProps>(
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
        <path d="m7 4 4.705 4.874a.407.407 0 0 0 .59 0L17 4" /><path d="m7 20 4.646-4.646a.5.5 0 0 1 .708 0L17 20" />
      </IconBase>
    );
  }
);

ChevronsDownUp.displayName = 'ChevronsDownUp';