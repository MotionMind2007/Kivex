import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const Chat = forwardRef<SVGSVGElement, IconProps>(
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
        <path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v9.304a2 2 0 0 1-2 2H7.659a2 2 0 0 0-1.189.392l-3.673 2.715A.5.5 0 0 1 2 20.009z" /><path d="M6 8h11" /><path d="M6 13h9" />
      </IconBase>
    );
  }
);

Chat.displayName = 'Chat';