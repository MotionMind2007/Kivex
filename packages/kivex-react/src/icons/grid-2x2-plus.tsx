import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const Grid2x2Plus = forwardRef<SVGSVGElement, IconProps>(
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
        <path d="M12 21H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v8" /><path d="M3 12h18" /><path d="M12 3v18" /><path d="M19 16v6" /><path d="M16 19h6" />
      </IconBase>
    );
  }
);

Grid2x2Plus.displayName = 'Grid2x2Plus';