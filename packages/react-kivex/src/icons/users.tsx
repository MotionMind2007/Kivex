import { forwardRef } from 'react';
    import { IconBase } from '../components/IconBase';
    import type { IconProps } from '../types/IconProps';

export const Users = forwardRef<SVGSVGElement, IconProps>(
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
        <circle cx={10} cy={8} r={5} stroke="black" strokeWidth={2} /><path d="M18 21C18 16.5817 14.4183 13 10 13C5.58172 13 2 16.5817 2 21" stroke="black" strokeWidth={2} strokeLinecap="round" /><path d="M18 4C18.8333 5.33333 20 8.9 18 12.5" stroke="black" strokeWidth={2} strokeLinecap="round" /><path d="M18 12.5C19.5 13.8333 22.4 17.4 22 21" stroke="black" strokeWidth={2} strokeLinecap="round" />
      </IconBase>
    );
  }
);

Users.displayName = 'Users';