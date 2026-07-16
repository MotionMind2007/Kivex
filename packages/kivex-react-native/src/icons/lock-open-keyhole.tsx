import { forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const LockOpenKeyhole = forwardRef<Svg, IconProps>(
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
        <Path d="M20 10H4c-.55 0-1 .49-1 1.09v9.82c0 .6.45 1.09 1 1.09h16c.55 0 1-.49 1-1.09v-9.82c0-.6-.45-1.09-1-1.09" /><Path d="M16.87 5c-.52-1.87-2.5-3-4.87-3-2.76 0-5 1.99-5 4.44V10" /><Path d="M12 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
      </IconBase>
    );
  }
);

LockOpenKeyhole.displayName = 'LockOpenKeyhole';