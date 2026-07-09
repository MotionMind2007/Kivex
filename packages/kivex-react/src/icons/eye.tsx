import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const Eye = forwardRef<SVGSVGElement, IconProps>(
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
        <circle cx={12} cy={12} r={3} /><path d="M2 12C5 6.718 13.2-.678 22 12" /><path d="M22.008 12.023c-3 5.282-11.2 12.678-20 0" />
      </IconBase>
    );
  }
);

Eye.displayName = 'Eye';