import { forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const MicOff = forwardRef<Svg, IconProps>(
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
        <Path d="M9.17 4A3 3 0 0 1 15 5v5" /><Path d="M14 14.24A3 3 0 0 1 9 12V9" /><Path d="M18.84 13.5q.16-.73.16-1.5v-2" /><Path d="M5 10v2a7 7 0 0 0 7 7m4-1.25A7 7 0 0 1 12 19m0 0v3" /><Path d="m2 2 20 20" />
      </IconBase>
    );
  }
);

MicOff.displayName = 'MicOff';