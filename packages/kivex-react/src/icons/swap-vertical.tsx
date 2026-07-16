import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const SwapVertical = forwardRef<SVGSVGElement, IconProps>(
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
        <path d="M7 4v14" /><path d="m3 16 3.65 3.65a.5.5 0 0 0 .7 0L11 16" /><path d="m13 8 3.65-3.65a.5.5 0 0 1 .7 0L21 8" /><path d="M17 6v14" />
      </IconBase>
    );
  }
);

SwapVertical.displayName = 'SwapVertical';