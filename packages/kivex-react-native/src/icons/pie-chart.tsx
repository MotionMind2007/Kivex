import { forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const PieChart = forwardRef<Svg, IconProps>(
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
        <Path d="M22 13.1v-.3A10.8 10.8 0 0 0 11.2 2h-.3a.94.94 0 0 0-.9.96V13a1 1 0 0 0 1 1h10.04c.5 0 .94-.38.96-.9" /><Path d="M20 17.63A9.8 9.8 0 0 1 11.83 22 9.83 9.83 0 0 1 2 12.17 9.8 9.8 0 0 1 6.37 4" />
      </IconBase>
    );
  }
);

PieChart.displayName = 'PieChart';