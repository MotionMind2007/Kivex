import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const Users = forwardRef<SVGSVGElement, IconProps>(
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
        <circle cx={10} cy={8} r={5} /><path d="M18 21a8 8 0 1 0-16 0" /><path d="M18 4c.833 1.333 2 4.9 0 8.5" /><path d="M18 12.5c1.5 1.333 4.4 4.9 4 8.5" />
      </IconBase>
    );
  }
);

Users.displayName = 'Users';