import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const ThumbsUp = forwardRef<SVGSVGElement, IconProps>(
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
        <path d="M7 10H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h4m0-12h.265a1 1 0 0 0 .954-.702l2.165-6.928a.37.37 0 0 1 .48-.238 4.07 4.07 0 0 1 2.656 3.392l.393 3.665c.05.461.439.811.902.811h6.005a1 1 0 0 1 .986 1.164l-1.667 10a1 1 0 0 1-.986.836H7m0-12v12" />
      </IconBase>
    );
  }
);

ThumbsUp.displayName = 'ThumbsUp';