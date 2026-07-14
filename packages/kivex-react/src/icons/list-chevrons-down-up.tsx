import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const ListChevronsDownUp = forwardRef<SVGSVGElement, IconProps>(
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
        <path d="m14 19 3.253-2.908a.38.38 0 0 1 .494 0L21 19" /><path d="M3 5h7" /><path d="M3 12h7" /><path d="M3 19h7" /><path d="m14 5 3.253 2.908a.38.38 0 0 0 .494 0L21 5" />
      </IconBase>
    );
  }
);

ListChevronsDownUp.displayName = 'ListChevronsDownUp';