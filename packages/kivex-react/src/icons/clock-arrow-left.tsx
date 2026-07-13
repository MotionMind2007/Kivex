import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const ClockArrowLeft = forwardRef<SVGSVGElement, IconProps>(
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
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10" /><path d="m18 13-3.914 3.899c-.115.056-.115.146 0 .202L18 21" /><path d="M15 17h7" /><path d="M12 6v5l1 1" />
      </IconBase>
    );
  }
);

ClockArrowLeft.displayName = 'ClockArrowLeft';