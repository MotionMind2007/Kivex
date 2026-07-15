import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const Bookmark = forwardRef<SVGSVGElement, IconProps>(
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
        <path d="M5 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v16.229a1 1 0 0 1-1.517.856l-4.966-2.996a1 1 0 0 0-1.033 0l-4.968 2.996A1 1 0 0 1 5 20.23z" />
      </IconBase>
    );
  }
);

Bookmark.displayName = 'Bookmark';