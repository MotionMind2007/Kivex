import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const Menu = forwardRef<SVGSVGElement, IconProps>(
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
        <path d="M4 5h15" /><path d="M4 12h15" /><path d="M4 19h15" />
      </IconBase>
    );
  }
);

Menu.displayName = 'Menu';