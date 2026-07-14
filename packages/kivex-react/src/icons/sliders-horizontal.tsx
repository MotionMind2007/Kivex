import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const SlidersHorizontal = forwardRef<SVGSVGElement, IconProps>(
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
        <path d="M3 5h7" /><path d="M14 5V3m0 2v2m0-2h7" /><path d="M8 12v-2m0 2v2m0-2H3" /><path d="M12 12h9" /><path d="M3 19h9" /><path d="M16 19v-2m0 2v2m0-2h5" />
      </IconBase>
    );
  }
);

SlidersHorizontal.displayName = 'SlidersHorizontal';