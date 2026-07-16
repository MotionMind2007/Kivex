import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const SquareArrowUpLeft = forwardRef<SVGSVGElement, IconProps>(
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
        <path d="m10 10 5 5" /><path d="M20.5 21h-17a.5.5 0 0 1-.5-.5v-17a.5.5 0 0 1 .5-.5h17a.5.5 0 0 1 .5.5v17a.5.5 0 0 1-.5.5" /><path d="M9 15V9.5a.5.5 0 0 1 .5-.5H15" />
      </IconBase>
    );
  }
);

SquareArrowUpLeft.displayName = 'SquareArrowUpLeft';