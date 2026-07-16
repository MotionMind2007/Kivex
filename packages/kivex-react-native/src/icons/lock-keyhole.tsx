import { forwardRef } from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const LockKeyhole = forwardRef<Svg, IconProps>(
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
        <Path d="M20 10H4c-.55 0-1 .49-1 1.09v9.82c0 .6.45 1.09 1 1.09h16c.55 0 1-.49 1-1.09v-9.82c0-.6-.45-1.09-1-1.09" /><Path d="M7 10V6.44C7 4 9.24 2 12 2s5 1.99 5 4.44V10" /><Circle cx={12} cy={16} r={1} />
      </IconBase>
    );
  }
);

LockKeyhole.displayName = 'LockKeyhole';