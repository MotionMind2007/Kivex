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
        <g clipPath="url(#clip0_47_35)"><path d="M8.21428 20.0643L21.1165 6.4117C22.155 5.31286 22.106 3.58026 21.0072 2.54182C19.9083 1.50338 18.1757 1.55234 17.1373 2.65117L4.18896 16.3525C4.11277 16.4332 4.05053 16.5259 4.00478 16.6269L1.72771 21.6562C1.54474 22.0603 1.93957 22.4848 2.35589 22.3316L7.83287 20.3159C7.97772 20.2626 8.10827 20.1765 8.21428 20.0643Z" stroke="black" strokeWidth={2} /><path d="M12 21H21" stroke="black" strokeWidth={2} strokeLinecap="round" /></g><defs><clipPath id="clip0_47_35"><rect width={24} height={24} fill="white" /></clipPath></defs>
      </IconBase>
    );
  }
);

PenLine.displayName = 'PenLine';