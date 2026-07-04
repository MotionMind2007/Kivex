import { forwardRef } from 'react';
    import { IconBase } from '../components/IconBase';
    import type { IconProps } from '../types/IconProps';

export const Plus = forwardRef<SVGSVGElement, IconProps>(
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
        <rect x={11} y={5} width={2} height={14} rx={1} fill="black" /><rect x={19} y={11} width={2} height={14} rx={1} transform="rotate(90 19 11)" fill="black" />
      </IconBase>
    );
  }
);

Plus.displayName = 'Plus';