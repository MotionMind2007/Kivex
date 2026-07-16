import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const Star = forwardRef<SVGSVGElement, IconProps>(
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
        <path d="M11.952 2.146a.05.05 0 0 1 .096 0l2.41 7.42a.05.05 0 0 0 .048.035h7.802a.05.05 0 0 1 .03.09l-6.313 4.586a.05.05 0 0 0-.018.056l2.411 7.42a.05.05 0 0 1-.077.056l-6.312-4.586a.05.05 0 0 0-.058 0l-6.312 4.586a.05.05 0 0 1-.077-.056l2.41-7.42a.05.05 0 0 0-.017-.056L1.663 9.691a.05.05 0 0 1 .03-.09h7.801a.05.05 0 0 0 .048-.035z" />
      </IconBase>
    );
  }
);

Star.displayName = 'Star';