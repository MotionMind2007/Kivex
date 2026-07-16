import { forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const GlobeCheck = forwardRef<Svg, IconProps>(
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
        <Path d="M11 2.05A10 10 0 1 0 22 12" /><Path d="M2 12h20" /><Path d="M11 2.32C9.28 3.42 8 7.33 8 12c0 5.52 1.79 10 4 10s4-4.48 4-10" /><Path d="m13 6 2.62 1.75a.5.5 0 0 0 .67-.1L20 3" />
      </IconBase>
    );
  }
);

GlobeCheck.displayName = 'GlobeCheck';