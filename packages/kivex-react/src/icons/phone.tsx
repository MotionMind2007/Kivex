import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const Phone = forwardRef<SVGSVGElement, IconProps>(
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
        <path d="M7.5 2.5H3.308a.95.95 0 0 0-.954.794c-1.052 6.854 2.627 16.813 18.554 18.598A.987.987 0 0 0 22 20.911v-4.998a1 1 0 0 0-.91-.996l-4.265-.387a1 1 0 0 0-.605.138l-2.133 1.28a.19.19 0 0 1-.178.006 18.5 18.5 0 0 1-6.531-5.45l-.286-.38a.205.205 0 0 1 0-.247L8.3 8.267a1 1 0 0 0 .2-.6V3.5a1 1 0 0 0-1-1Z" />
      </IconBase>
    );
  }
);

Phone.displayName = 'Phone';