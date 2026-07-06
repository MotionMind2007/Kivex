import { forwardRef } from 'react';
    import { IconBase } from '../components/IconBase';
    import type { IconProps } from '../types/IconProps';

export const Close = forwardRef<SVGSVGElement, IconProps>(
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
        <rect width={14} height={2} x={7.757} y={6.343} rx={1} transform="rotate(45 7.757 6.343)" /><rect width={2} height={14} x={16.243} y={6.343} rx={1} transform="rotate(45 16.243 6.343)" />
      </IconBase>
    );
  }
);

Close.displayName = 'Close';