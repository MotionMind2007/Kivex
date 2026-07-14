import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const EyeClosed = forwardRef<SVGSVGElement, IconProps>(
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
        <path d="M21 8c0 3.314-4.03 6-9 6s-9-2.686-9-6" /><path d="m5 12-3 3" /><path d="m19 12 3 3" /><path d="m9 14-1 4" /><path d="m14 14 1 4" />
      </IconBase>
    );
  }
);

EyeClosed.displayName = 'EyeClosed';