import { forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const ColumnChart = forwardRef<Svg, IconProps>(
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
        <Path d="M3 3v17a1 1 0 0 0 1 1h17" /><Path d="M8 17v-4" /><Path d="M13 5v12" /><Path d="M18 17V9" />
      </IconBase>
    );
  }
);

ColumnChart.displayName = 'ColumnChart';