import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const Video = forwardRef<SVGSVGElement, IconProps>(
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
        <rect width={14} height={12} x={2} y={6} rx={1} /><path d="m16 13 4.445 2.964A1 1 0 0 0 22 15.131V8.869a1 1 0 0 0-1.555-.833L16 11" />
      </IconBase>
    );
  }
);

Video.displayName = 'Video';