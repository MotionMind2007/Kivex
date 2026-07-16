import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const ChevronsDown = forwardRef<SVGSVGElement, IconProps>(
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
        <path d="m7 6 4.7 4.87a.4.4 0 0 0 .6 0L17 6" /><path d="m7 13 4.7 4.87a.4.4 0 0 0 .6 0L17 13" />
      </IconBase>
    );
  }
);

ChevronsDown.displayName = 'ChevronsDown';