import { forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const CircleArrowOutUpRight = forwardRef<Svg, IconProps>(
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
        <Path d="M16 2h5.5a.5.5 0 0 1 .5.5V8" /><Path d="m13 11 8-8" /><Path d="M22 12A10 10 0 1 1 12 2" />
      </IconBase>
    );
  }
);

CircleArrowOutUpRight.displayName = 'CircleArrowOutUpRight';