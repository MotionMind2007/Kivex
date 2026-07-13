import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const SmilePlus = forwardRef<SVGSVGElement, IconProps>(
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
        <path d="M21.95 11q.05.493.05 1c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2q.507 0 1 .05" /><path d="M7 15c2.45 3.43 7.55 3.43 10 0" /><path d="M8 10.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z" /><path d="M16 10.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z" /><path d="M19 2v6" /><path d="M16 5h6" />
      </IconBase>
    );
  }
);

SmilePlus.displayName = 'SmilePlus';