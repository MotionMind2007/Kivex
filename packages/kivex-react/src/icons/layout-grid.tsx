import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const LayoutGrid = forwardRef<SVGSVGElement, IconProps>(
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
        <rect width={7} height={7} x={3} y={3} rx={0.5} /><rect width={7} height={7} x={14} y={3} rx={0.5} /><rect width={7} height={7} x={3} y={14} rx={0.5} /><rect width={7} height={7} x={14} y={14} rx={0.5} />
      </IconBase>
    );
  }
);

LayoutGrid.displayName = 'LayoutGrid';