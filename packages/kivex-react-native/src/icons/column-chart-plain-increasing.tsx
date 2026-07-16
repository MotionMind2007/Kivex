import { forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const ColumnChartPlainIncreasing = forwardRef<Svg, IconProps>(
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
        <Path d="M5 21v-6" /><Path d="M19 3v18" /><Path d="M12 21V9" />
      </IconBase>
    );
  }
);

ColumnChartPlainIncreasing.displayName = 'ColumnChartPlainIncreasing';