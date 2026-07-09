import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const ColumnChartPlainIncreasing = forwardRef<SVGSVGElement, IconProps>(
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
        <path d="M5 21v-6" /><path d="M19 3v18" /><path d="M12 21V9" />
      </IconBase>
    );
  }
);

ColumnChartPlainIncreasing.displayName = 'ColumnChartPlainIncreasing';