import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const BellRing = forwardRef<SVGSVGElement, IconProps>(
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
        <path d="M5.778 9.588C5.778 5.95 8.564 3 12 3s6.222 2.95 6.222 6.588v3.817c0 .585.129 1.161.376 1.684l1.027 2.175c.247.523.375 1.1.375 1.684V19H4v-.052c0-.585.129-1.161.375-1.684l1.027-2.175c.247-.523.376-1.1.376-1.684z" /><path d="M10 22h4" /><path d="M2 8c.167-.833.5-3.5 3-6" /><path d="M19 2c.833.833 2.6 3.2 3 6" />
      </IconBase>
    );
  }
);

BellRing.displayName = 'BellRing';