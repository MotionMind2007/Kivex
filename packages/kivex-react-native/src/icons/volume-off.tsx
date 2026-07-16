import { forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const VolumeOff = forwardRef<Svg, IconProps>(
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
        <Path d="M7 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.72a1 1 0 0 1 .52.14l4 2.4a.5.5 0 0 0 .76-.42V12" /><Path d="m10 5.75.2-.15a.5.5 0 0 1 .8.4v1" /><Path d="M16 9a5 5 0 0 1 1.09 3.5" /><Path d="M19 5c1.92 1.92 4.47 6.37 2.2 11" /><Path d="m2 2 20 20" />
      </IconBase>
    );
  }
);

VolumeOff.displayName = 'VolumeOff';