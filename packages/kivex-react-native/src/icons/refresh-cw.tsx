import { forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const RefreshCw = forwardRef<Svg, IconProps>(
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
        <Path d="M19.48 6.77a10.5 10.5 0 0 0-5.94-3.63 9 9 0 0 0-10.48 7.23" /><Path d="M20.9 11.61a9 9 0 0 1-10.62 9.23C7.22 20.28 5.15 17.66 4 15" /><Path d="M8 14H3.5a.5.5 0 0 0-.5.5V19" /><Path d="M20 3v4.5a.5.5 0 0 1-.5.5H15" />
      </IconBase>
    );
  }
);

RefreshCw.displayName = 'RefreshCw';