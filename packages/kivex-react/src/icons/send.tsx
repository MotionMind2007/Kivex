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
        <path d="M1.116 3.858c-.3-1.214.932-2.24 2.072-1.726l18.915 8.523c1.179.531 1.179 2.205 0 2.736L3.189 21.914c-1.14.513-2.37-.512-2.072-1.727l2.012-8.164zm3.826 9.165-1.64 6.645 14.749-6.645zm0-2h13.109L3.303 4.377z" />
      </IconBase>
    );
  }
);

Send.displayName = 'Send';