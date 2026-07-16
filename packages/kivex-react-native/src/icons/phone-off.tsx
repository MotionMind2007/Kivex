import { forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const PhoneOff = forwardRef<Svg, IconProps>(
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
        <Path d="M10 13.33a19 19 0 0 0 3.91 2.62.2.2 0 0 0 .18 0l2.13-1.28a1 1 0 0 1 .6-.14l4.27.39a1 1 0 0 1 .91 1v5a1 1 0 0 1-1.1.97C14.3 21.15 9.8 19 6.88 16.25" /><Path d="m7.76 11-.38-.5-.29-.38a.2.2 0 0 1 0-.24L8.3 8.27a1 1 0 0 0 .2-.6V3.5a1 1 0 0 0-1-1H3.3a.95.95 0 0 0-.95.8c-.47 3.08.02 6.8 2.15 10.12" /><Path d="M2 22 22 2" />
      </IconBase>
    );
  }
);

PhoneOff.displayName = 'PhoneOff';