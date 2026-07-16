import { forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const PhoneCall = forwardRef<Svg, IconProps>(
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
        <Path d="M7.5 2.5H3.3a.95.95 0 0 0-.95.8C1.3 10.14 4.98 20.1 20.91 21.9a1 1 0 0 0 1.09-1v-5a1 1 0 0 0-.91-1l-4.26-.38a1 1 0 0 0-.61.14l-2.13 1.28a.2.2 0 0 1-.18 0 18.5 18.5 0 0 1-6.53-5.45l-.29-.38a.2.2 0 0 1 0-.24l1.21-1.6a1 1 0 0 0 .2-.6V3.5a1 1 0 0 0-1-1" /><Path d="M13 6a4.18 4.18 0 0 1 5 4.1v.9" /><Path d="M14 2h1a7 7 0 0 1 7 7v2" />
      </IconBase>
    );
  }
);

PhoneCall.displayName = 'PhoneCall';