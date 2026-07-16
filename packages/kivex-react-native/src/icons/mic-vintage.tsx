import { forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const MicVintage = forwardRef<Svg, IconProps>(
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
        <Path d="M9 12a3 3 0 1 0 6 0V5a3 3 0 1 0-6 0m0 7V8.5M9 12h2M9 5v3.5M9 5h2M9 8.5h2" /><Path d="M5 10v2a7 7 0 0 0 7 7m0 0a7 7 0 0 0 7-7v-2m-7 9v3" />
      </IconBase>
    );
  }
);

MicVintage.displayName = 'MicVintage';