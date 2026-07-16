import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const HouseAntenna = forwardRef<SVGSVGElement, IconProps>(
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
        <rect x={4} y={10} width={16} height={12} /><polygon points="4,10 12,3 20,10" /><line x1={12} y1={3} x2={12} y2={0.5} /><circle cx={12} cy={0.5} r={1.5} fill="currentColor" stroke="none" /><rect x={9} y={14} width={6} height={8} /><circle cx={13.5} cy={18} r={0.8} fill="currentColor" stroke="none" /><rect x={6} y={12} width={4} height={4} /><rect x={14} y={12} width={4} height={4} />
      </IconBase>
    );
  }
);

HouseAntenna.displayName = 'HouseAntenna';