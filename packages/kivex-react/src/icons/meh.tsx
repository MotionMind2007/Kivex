import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const Meh = forwardRef<SVGSVGElement, IconProps>(
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
        <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20" /><path d="M7 15h10" /><path d="M8 10.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" /><path d="M16 10.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" />
      </IconBase>
    );
  }
);

Meh.displayName = 'Meh';