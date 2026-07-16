import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const ColumnChart = forwardRef<SVGSVGElement, IconProps>(
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
        <path d="M3 3v17a1 1 0 0 0 1 1h17" /><path d="M8 17v-4" /><path d="M13 5v12" /><path d="M18 17V9" />
      </IconBase>
    );
  }
);

ColumnChart.displayName = 'ColumnChart';