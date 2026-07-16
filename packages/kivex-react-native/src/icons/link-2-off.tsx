import { forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const Link2Off = forwardRef<Svg, IconProps>(
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
        <Path d="M17 17a5 5 0 0 0 0-10h-1" /><Path d="M8 17H7A5 5 0 0 1 7 7" /><Path d="M7 12h5" /><Path d="m2 2 20 20" />
      </IconBase>
    );
  }
);

Link2Off.displayName = 'Link2Off';