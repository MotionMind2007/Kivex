import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const ArrowRightFromLine = forwardRef<SVGSVGElement, IconProps>(
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
        <path d="M7 12h12" /><path d="M3 5v14" /><path d="m15 6 5.848 5.646a.49.49 0 0 1 0 .708L15 18" />
      </IconBase>
    );
  }
);

ArrowRightFromLine.displayName = 'ArrowRightFromLine';