import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const SquareChevronDown = forwardRef<SVGSVGElement, IconProps>(
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
        <path d="m8 10 3.764 3.899c.13.135.341.135.472 0L16 10" /><rect width={18} height={18} x={3} y={3} rx={1.5} />
      </IconBase>
    );
  }
);

SquareChevronDown.displayName = 'SquareChevronDown';