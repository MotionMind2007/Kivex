import { forwardRef } from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const CircleChevronDown = forwardRef<Svg, IconProps>(
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
        <Path d="m8 10 3.76 3.9c.13.13.34.13.48 0L16 10" /><Circle cx={12} cy={12} r={10} />
      </IconBase>
    );
  }
);

CircleChevronDown.displayName = 'CircleChevronDown';