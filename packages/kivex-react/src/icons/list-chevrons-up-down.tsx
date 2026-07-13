import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const ListChevronsUpDown = forwardRef<SVGSVGElement, IconProps>(
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
        <path d="m14 8 3.253-2.908a.38.38 0 0 1 .494 0L21 8" /><path d="m14 16 3.253 2.908a.38.38 0 0 0 .494 0L21 16" /><path d="M3 5h7" /><path d="M3 12h7" /><path d="M3 19h7" />
      </IconBase>
    );
  }
);

ListChevronsUpDown.displayName = 'ListChevronsUpDown';