import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const Annoyed = forwardRef<SVGSVGElement, IconProps>(
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
        <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20" /><path d="M8 15h8" /><path d="M8 9h2" /><path d="M14 9h2" />
      </IconBase>
    );
  }
);

Annoyed.displayName = 'Annoyed';