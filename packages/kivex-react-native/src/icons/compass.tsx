import { forwardRef } from 'react';
import Svg, { Circle, Path } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const Compass = forwardRef<Svg, IconProps>(
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
        <Circle cx={12} cy={12} r={10} /><Path d="m13.05 14.32-4.67 1.55a.2.2 0 0 1-.25-.25l1.56-4.67a2 2 0 0 1 1.26-1.27l4.67-1.55a.2.2 0 0 1 .25.25l-1.55 4.67a2 2 0 0 1-1.27 1.27" />
      </IconBase>
    );
  }
);

Compass.displayName = 'Compass';