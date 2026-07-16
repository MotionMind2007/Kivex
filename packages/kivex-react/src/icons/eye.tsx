import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const Eye = forwardRef<SVGSVGElement, IconProps>(
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
        <circle cx={12} cy={12} r={3} /><path d="M2 12C5 6.72 13.2-.68 22 12" /><path d="M22 12.02c-3 5.29-11.2 12.68-20 0" />
      </IconBase>
    );
  }
);

Eye.displayName = 'Eye';