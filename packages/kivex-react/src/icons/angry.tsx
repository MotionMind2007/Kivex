import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const Angry = forwardRef<SVGSVGElement, IconProps>(
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
        <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20" /><path d="M8 16c1.77-2.67 6.23-2.67 8 0" /><path d="m7 7 2 1" /><path d="m15 8 2-1" /><circle cx={8} cy={11} r={0.5} /><circle cx={16} cy={11} r={0.5} />
      </IconBase>
    );
  }
);

Angry.displayName = 'Angry';