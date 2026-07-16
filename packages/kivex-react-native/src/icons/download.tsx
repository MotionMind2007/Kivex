import { forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const Download = forwardRef<Svg, IconProps>(
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
        <Path d="M3 15v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4" /><Path d="m6 10 5.3 5.3a1 1 0 0 0 1.4 0L18 10" /><Path d="M12 3v11" />
      </IconBase>
    );
  }
);

Download.displayName = 'Download';