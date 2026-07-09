import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const ShieldCheck = forwardRef<SVGSVGElement, IconProps>(
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
        <path d="M4 5.256a.23.23 0 0 1 .227-.229c2.45-.018 4.83-.82 6.791-2.29l.808-.606a.29.29 0 0 1 .348 0l.808.605a11.45 11.45 0 0 0 6.79 2.291.23.23 0 0 1 .228.229v6.712a10.29 10.29 0 0 1-7.977 10.027.1.1 0 0 1-.046 0A10.29 10.29 0 0 1 4 11.968V5.256Z" /><path d="m9 12 1.741 1.625a.5.5 0 0 0 .737-.06L15 9" />
      </IconBase>
    );
  }
);

ShieldCheck.displayName = 'ShieldCheck';