import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const MenuVertical = forwardRef<SVGSVGElement, IconProps>(
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
        <rect width={2} height={2} x={11} y={4} rx={1} /><rect width={2} height={2} x={11} y={11} rx={1} /><rect width={2} height={2} x={11} y={18} rx={1} />
      </IconBase>
    );
  }
);

MenuVertical.displayName = 'MenuVertical';