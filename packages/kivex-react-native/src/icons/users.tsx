import { forwardRef } from 'react';
import Svg, { Circle, Path } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const Users = forwardRef<Svg, IconProps>(
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
        <Circle cx={10} cy={8} r={5} /><Path d="M18 21a8 8 0 1 0-16 0" /><Path d="M18 4c.83 1.33 2 4.9 0 8.5" /><Path d="M18 12.5c1.5 1.33 4.4 4.9 4 8.5" />
      </IconBase>
    );
  }
);

Users.displayName = 'Users';