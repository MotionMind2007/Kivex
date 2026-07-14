import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const Moon = forwardRef<SVGSVGElement, IconProps>(
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
        <path d="M12 21c4.567 0 7.917-3.376 8.819-7.802.125-.616-.406-1.142-1.034-1.117-8.525.34-8.443-4.734-7.975-7.918.09-.611-.375-1.167-.988-1.087A9.002 9.002 0 0 0 12 21Z" />
      </IconBase>
    );
  }
);

Moon.displayName = 'Moon';