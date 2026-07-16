import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const CircleArrowLeft = forwardRef<SVGSVGElement, IconProps>(
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
        <path d="m12 8-3.914 3.798a.28.28 0 0 0 0 .404L12 16" /><path d="M9 12h7" /><circle cx={12} cy={12} r={10} />
      </IconBase>
    );
  }
);

CircleArrowLeft.displayName = 'CircleArrowLeft';