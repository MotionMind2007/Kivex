import { forwardRef } from 'react';
    import { IconBase } from '../components/IconBase';
    import type { IconProps } from '../types/IconProps';

export const Menu = forwardRef<SVGSVGElement, IconProps>(
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
        <rect x={4} y={5} width={16} height={2} rx={1} fill="black" /><rect x={4} y={11} width={16} height={2} rx={1} fill="black" /><rect x={4} y={17} width={16} height={2} rx={1} fill="black" />
      </IconBase>
    );
  }
);

Menu.displayName = 'Menu';