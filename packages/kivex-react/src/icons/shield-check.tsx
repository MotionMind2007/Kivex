import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const ShieldCheck = forwardRef<SVGSVGElement, IconProps>(
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
        <path d="M4 5.26a.23.23 0 0 1 .23-.23c2.45-.02 4.83-.82 6.79-2.3l.8-.6a.3.3 0 0 1 .35 0l.81.6a11.5 11.5 0 0 0 6.8 2.3.23.23 0 0 1 .22.23v6.7A10.3 10.3 0 0 1 12.02 22h-.04A10.3 10.3 0 0 1 4 11.97z" /><path d="m9 12 1.74 1.63a.5.5 0 0 0 .74-.07L15 9" />
      </IconBase>
    );
  }
);

ShieldCheck.displayName = 'ShieldCheck';