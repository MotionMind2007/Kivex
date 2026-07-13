import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const ExternalLink = forwardRef<SVGSVGElement, IconProps>(
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
        <path d="M18 13v7.583c0 .23-.187.417-.417.417H3.417A.417.417 0 0 1 3 20.583V6.417c0-.23.187-.417.417-.417H11" /><path d="M15 3h5.5a.5.5 0 0 1 .5.5V9" /><path d="M10 14 20 4" />
      </IconBase>
    );
  }
);

ExternalLink.displayName = 'ExternalLink';