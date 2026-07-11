import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const Paperclip = forwardRef<SVGSVGElement, IconProps>(
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
        <path d="M10 6.21v9.58a2 2 0 0 0 4 0V6a4 4 0 0 0-8 0v10a6 6 0 0 0 12 0V6.21" />
      </IconBase>
    );
  }
);

Paperclip.displayName = 'Paperclip';