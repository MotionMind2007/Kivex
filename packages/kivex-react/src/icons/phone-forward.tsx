import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const PhoneForward = forwardRef<SVGSVGElement, IconProps>(
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
        <path d="M7.362 2h-4.23a.966.966 0 0 0-.964.819c-1.062 7.066 2.651 17.334 18.73 19.175.587.067 1.102-.408 1.102-1.012v-5.153c0-.533-.398-.978-.918-1.027l-4.306-.4a1 1 0 0 0-.61.143l-2.154 1.32a.18.18 0 0 1-.18.007 18.8 18.8 0 0 1-6.593-5.62L6.95 9.86a.215.215 0 0 1 0-.254l1.219-1.66c.131-.179.202-.396.202-.62V3.032A1.02 1.02 0 0 0 7.362 2Z" /><path d="M13 6h7" /><path d="m18 2 3.824 3.6c.235.22.235.58 0 .8L18 10" />
      </IconBase>
    );
  }
);

PhoneForward.displayName = 'PhoneForward';