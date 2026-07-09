import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const Heart = forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#a)"><path d="m11.958 7.692-1.183-1.27C7.639 3.053 2 5.272 2 9.874c0 1.451.623 2.834 1.71 3.795l8.098 7.16a.29.29 0 0 0 .384 0l8.097-7.16A5.07 5.07 0 0 0 22 9.875c0-4.602-5.639-6.82-8.775-3.454l-1.183 1.27a.06.06 0 0 1-.084 0Z" /></g><defs><clipPath id="a"><rect width={24} height={24} /></clipPath></defs>
      </IconBase>
    );
  }
);

Heart.displayName = 'Heart';