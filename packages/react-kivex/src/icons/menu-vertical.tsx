import { forwardRef } from 'react';
    import { IconBase } from '../components/IconBase';
    import type { IconProps } from '../types/IconProps';

export const MenuVertical = forwardRef<SVGSVGElement, IconProps>(
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
        <circle cx={12} cy={9} r={1} fill="black" /><circle cx={12} cy={12} r={1} fill="black" /><circle cx={12} cy={15} r={1} fill="black" />
      </IconBase>
    );
  }
);

MenuVertical.displayName = 'MenuVertical';