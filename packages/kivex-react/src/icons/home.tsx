import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const Home = forwardRef<SVGSVGElement, IconProps>(
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
        <path d="M3 9.468a1 1 0 0 1 .36-.768l8-6.667a1 1 0 0 1 1.28 0l8 6.667a1 1 0 0 1 .36.768V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" /><path d="M9 21v-7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v7" />
      </IconBase>
    );
  }
);

Home.displayName = 'Home';