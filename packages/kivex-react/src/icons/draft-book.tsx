import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const DraftBook = forwardRef<SVGSVGElement, IconProps>(
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
        <path d="M4 18v2a2 2 0 0 0 2 2h13.857M4 18h15.857M4 18V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v13.857a.143.143 0 0 1-.143.143M20 22h-.143m0-4-.576.538a2 2 0 0 0 0 2.924l.576.538" /><path d="M9.6 14H12m2.4 0H12m0 0V6m0 0H8.5a.5.5 0 0 0-.5.5v1.278M12 6h3.5a.5.5 0 0 1 .5.5v1.278" />
      </IconBase>
    );
  }
);

DraftBook.displayName = 'DraftBook';