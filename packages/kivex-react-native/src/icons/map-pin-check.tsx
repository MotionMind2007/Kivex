import { forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const MapPinCheck = forwardRef<Svg, IconProps>(
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
        <Path d="m12.04 21.93 5.79-9.64a6.8 6.8 0 1 0-11.66 0l5.79 9.64a.05.05 0 0 0 .08 0" /><Path d="m10 9.5 1.56 1.46h.07L14 8" />
      </IconBase>
    );
  }
);

MapPinCheck.displayName = 'MapPinCheck';