import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const SlidersVertical = forwardRef<SVGSVGElement, IconProps>(
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
        <path d="M5 3v7" /><path d="M5 14v7m0-7H3m2 0h2" /><path d="M12 8h2m-2 0h-2m2 0V3" /><path d="M12 12v9" /><path d="M19 3v9" /><path d="M19 16h2m-2 0h-2m2 0v5" />
      </IconBase>
    );
  }
);

SlidersVertical.displayName = 'SlidersVertical';