import { forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const Pin = forwardRef<Svg, IconProps>(
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
        <Path d="M6 4a2 2 0 0 1 2-2h8a2 2 0 1 1 0 4 1 1 0 0 0-1 1v2.33a2 2 0 0 0 .4 1.2l2.2 2.94a2 2 0 0 1 .4 1.2V16a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-1.17a2 2 0 0 1 .59-1.42L8.4 11.6a2 2 0 0 0 .6-1.43V7a1 1 0 0 0-1-1 2 2 0 0 1-2-2" /><Path d="M12 17v5" />
      </IconBase>
    );
  }
);

Pin.displayName = 'Pin';