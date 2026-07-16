import { forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const HeartOff = forwardRef<Svg, IconProps>(
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
        <Path d="m16.73 16.82-4.54 4a.3.3 0 0 1-.38 0l-8.1-7.15A5 5 0 0 1 2 9.87C2 7.67 3.3 6 5 5.25" /><Path d="m19 14.81 1.29-1.14A5 5 0 0 0 22 9.87c0-4.6-5.64-6.82-8.77-3.45L12.04 7.7h-.08l-1.19-1.27a5 5 0 0 0-1.27-1" /><Path d="m2 2 20 20" />
      </IconBase>
    );
  }
);

HeartOff.displayName = 'HeartOff';