import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const Laugh = forwardRef<SVGSVGElement, IconProps>(
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
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z" /><path d="M16.933 14.143c-2.453 5.143-7.413 5.143-9.866 0A.1.1 0 0 1 7.156 14h9.688a.1.1 0 0 1 .089.143Z" /><path d="M8 10.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z" /><path d="M16 10.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z" />
      </IconBase>
    );
  }
);

Laugh.displayName = 'Laugh';