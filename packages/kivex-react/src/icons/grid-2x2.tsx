import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const Grid2x2 = forwardRef<SVGSVGElement, IconProps>(
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
        <rect width={18} height={18} x={3} y={3} rx={1} /><path d="M3 12h18" /><path d="M12 3v18" />
      </IconBase>
    );
  }
);

Grid2x2.displayName = 'Grid2x2';