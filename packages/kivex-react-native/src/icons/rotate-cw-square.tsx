import { forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const RotateCwSquare = forwardRef<Svg, IconProps>(
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
        <Path d="M15.5 5H17a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3.25M11 5H7a2 2 0 0 0-2 2v3.25" /><Path d="m9 2 2.3 2.3a1 1 0 0 1 0 1.4L9 8" />
      </IconBase>
    );
  }
);

RotateCwSquare.displayName = 'RotateCwSquare';