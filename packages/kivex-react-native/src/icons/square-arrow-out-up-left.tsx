import { forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const SquareArrowOutUpLeft = forwardRef<Svg, IconProps>(
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
        <Path d="M3 9V3.5a.5.5 0 0 1 .5-.5H9" /><Path d="m4 4 8 8" /><Path d="M3 13v7.5a.5.5 0 0 0 .5.5h17a.5.5 0 0 0 .5-.5v-17a.5.5 0 0 0-.5-.5H13" />
      </IconBase>
    );
  }
);

SquareArrowOutUpLeft.displayName = 'SquareArrowOutUpLeft';