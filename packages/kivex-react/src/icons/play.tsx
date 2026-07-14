import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const Play = forwardRef<SVGSVGElement, IconProps>(
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
        <path d="M5 20.152v-16.5a1 1 0 0 1 1.463-.887L20.49 10.1a1 1 0 0 1 .084 1.723L6.547 20.989A1 1 0 0 1 5 20.152Z" />
      </IconBase>
    );
  }
);

Play.displayName = 'Play';