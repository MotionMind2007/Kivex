import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const ArrowLeft = forwardRef<SVGSVGElement, IconProps>(
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
        <path d="m12 5-6.65 6.65a.5.5 0 0 0 0 .7L12 19" /><path d="M6 12h13" />
      </IconBase>
    );
  }
);

ArrowLeft.displayName = 'ArrowLeft';