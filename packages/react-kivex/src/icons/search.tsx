import { forwardRef } from 'react';
    import { IconBase } from '../components/IconBase';
    import type { IconProps } from '../types/IconProps';

export const Search = forwardRef<SVGSVGElement, IconProps>(
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
        <circle cx={11} cy={11} r={8} stroke="black" strokeWidth={2} /><path d="M16.9471 17.0541L21 21" stroke="black" strokeWidth={2} strokeLinecap="round" />
      </IconBase>
    );
  }
);

Search.displayName = 'Search';