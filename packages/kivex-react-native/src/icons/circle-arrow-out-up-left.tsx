import { forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const CircleArrowOutUpLeft = forwardRef<Svg, IconProps>(
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
        <Path d="m3 3 8 8" /><Path d="M2 8V2.5a.5.5 0 0 1 .5-.5H8" /><Path d="M2 12A10 10 0 1 0 12 2" />
      </IconBase>
    );
  }
);

CircleArrowOutUpLeft.displayName = 'CircleArrowOutUpLeft';