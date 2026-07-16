import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const ChevronsUp = forwardRef<SVGSVGElement, IconProps>(
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
        <path d="m7 11 4.646-4.646a.5.5 0 0 1 .708 0L17 11" /><path d="m7 18 4.646-4.646a.5.5 0 0 1 .708 0L17 18" />
      </IconBase>
    );
  }
);

ChevronsUp.displayName = 'ChevronsUp';