import { forwardRef } from 'react';
    import { IconBase } from '../components/IconBase';
    import type { IconProps } from '../types/IconProps';

export const Notification = forwardRef<SVGSVGElement, IconProps>(
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
        <path d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V13.0557C19 13.6767 19.1446 14.2892 19.4223 14.8446L20.5777 17.1554C20.8554 17.7108 21 18.3233 21 18.9443V19H3V18.9443C3 18.3233 3.14458 17.7108 3.42229 17.1554L4.57771 14.8446C4.85542 14.2892 5 13.6767 5 13.0557V9Z" stroke="black" strokeWidth={2} strokeLinejoin="round" /><path d="M10 22H14" stroke="black" strokeWidth={2} strokeLinecap="round" />
      </IconBase>
    );
  }
);

Notification.displayName = 'Notification';