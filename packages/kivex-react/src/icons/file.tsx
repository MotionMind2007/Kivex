import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const File = forwardRef<SVGSVGElement, IconProps>(
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
        <path d="M4 4a2 2 0 0 1 2-2h7.172a2 2 0 0 1 1.414.586l4.828 4.828A2 2 0 0 1 20 8.828V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" /><path d="M13 2v5a2 2 0 0 0 2 2h5" />
      </IconBase>
    );
  }
);

File.displayName = 'File';