import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const ThumbsDown = forwardRef<SVGSVGElement, IconProps>(
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
        <path d="M17 14h4a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-4m0 12h-.265a1 1 0 0 0-.954.702l-2.165 6.928a.37.37 0 0 1-.48.238 4.07 4.07 0 0 1-2.656-3.392l-.393-3.665A.907.907 0 0 0 9.185 14H3.18a1 1 0 0 1-.986-1.164l1.667-10A1 1 0 0 1 4.847 2H17m0 12V2" />
      </IconBase>
    );
  }
);

ThumbsDown.displayName = 'ThumbsDown';