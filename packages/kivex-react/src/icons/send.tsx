import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const Send = forwardRef<SVGSVGElement, IconProps>(
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
        <path d="M21.693 12.478 2.778 21.002a.5.5 0 0 1-.69-.576l2.042-8.284a.5.5 0 0 0 0-.24L2.087 3.619a.5.5 0 0 1 .691-.575l18.915 8.523a.5.5 0 0 1 0 .912Z" /><path d="M4.16 12.022h17.386" />
      </IconBase>
    );
  }
);

Send.displayName = 'Send';