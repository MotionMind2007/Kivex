import { forwardRef } from 'react';
    import { IconBase } from '../components/IconBase';
    import type { IconProps } from '../types/IconProps';

export const PenLine = forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#a)"><path d="M8.214 20.064 21.116 6.412a2.737 2.737 0 1 0-3.979-3.76L4.19 16.351q-.114.123-.184.275l-2.277 5.03a.5.5 0 0 0 .628.675l5.477-2.016a1 1 0 0 0 .381-.252Z" /><path d="M12 21h9" /></g><defs><clipPath id="a"><rect width={24} height={24} /></clipPath></defs>
      </IconBase>
    );
  }
);

PenLine.displayName = 'PenLine';