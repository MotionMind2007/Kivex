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
        <rect width={16} height={2} x={4} y={5} rx={1} /><rect width={16} height={2} x={4} y={11} rx={1} /><rect width={16} height={2} x={4} y={17} rx={1} />
      </IconBase>
    );
  }
);

Menu.displayName = 'Menu';