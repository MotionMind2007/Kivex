import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const ShoppingBag = forwardRef<SVGSVGElement, IconProps>(
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
        <path d="m21 6-2.7-3.6a1 1 0 0 0-.8-.4h-11a1 1 0 0 0-.8.4L3 6v15a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1zM3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" />
      </IconBase>
    );
  }
);

ShoppingBag.displayName = 'ShoppingBag';