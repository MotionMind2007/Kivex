import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const SettingsControl = forwardRef<SVGSVGElement, IconProps>(
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
        <path d="M10 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0m0 0h9" /><path d="M14 17a3 3 0 1 0 6 0 3 3 0 0 0-6 0m0 0H5" />
      </IconBase>
    );
  }
);

SettingsControl.displayName = 'SettingsControl';