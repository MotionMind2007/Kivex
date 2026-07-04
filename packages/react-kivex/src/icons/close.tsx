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
        <rect x={7.75736} y={6.34314} width={14} height={2} rx={1} transform="rotate(45 7.75736 6.34314)" fill="black" /><rect x={16.2426} y={6.34314} width={2} height={14} rx={1} transform="rotate(45 16.2426 6.34314)" fill="black" />
      </IconBase>
    );
  }
);

Close.displayName = 'Close';