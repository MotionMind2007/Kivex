import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const Notification = forwardRef<SVGSVGElement, IconProps>(
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
        <path d="M5 9a7 7 0 0 1 14 0v4.056a4 4 0 0 0 .422 1.789l1.156 2.31a4 4 0 0 1 .422 1.79V19H3v-.056a4 4 0 0 1 .422-1.789l1.156-2.31A4 4 0 0 0 5 13.055z" /><path d="M10 22h4" />
      </IconBase>
    );
  }
);

Notification.displayName = 'Notification';