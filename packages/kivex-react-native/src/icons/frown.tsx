import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const Frown = forwardRef<SVGSVGElement, IconProps>(
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
        <circle cx={12} cy={12} r={10} /><circle cx={8} cy={10} r={0.5} /><circle cx={16} cy={10} r={0.5} /><path d="M8 16c1.769-3.095 6.231-3.095 8 0" />
      </IconBase>
    );
  }
);

Frown.displayName = 'Frown';