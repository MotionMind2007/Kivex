import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const MicOff = forwardRef<SVGSVGElement, IconProps>(
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
        <path d="M9.17 4A3.001 3.001 0 0 1 15 5v5" /><path d="M14 14.236A3 3 0 0 1 9 12V9" /><path d="M18.839 13.5q.16-.726.161-1.5v-2" /><path d="M5 10v2a7 7 0 0 0 7 7m4-1.255A6.97 6.97 0 0 1 12 19m0 0v3" /><path d="m2 2 20 20" />
      </IconBase>
    );
  }
);

MicOff.displayName = 'MicOff';