import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const VideoCamera = forwardRef<SVGSVGElement, IconProps>(
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
        <path d="M14.214 7H4.786C4.352 7 4 7.336 4 7.75v7.5c0 .414.352.75.786.75h9.428c.434 0 .786-.336.786-.75v-7.5c0-.414-.352-.75-.786-.75Z" /><path d="m15 12.105 3.704 1.792c.554.268 1.296-.02 1.296-.503V9.606c0-.483-.742-.771-1.296-.503L15 10.895" /><path d="m7 21 2.143-3.57a1 1 0 0 1 1.714 0L13 21" /><circle cx={6.5} cy={3.5} r={1.5} /><circle cx={11.5} cy={3.5} r={1.5} />
      </IconBase>
    );
  }
);

VideoCamera.displayName = 'VideoCamera';