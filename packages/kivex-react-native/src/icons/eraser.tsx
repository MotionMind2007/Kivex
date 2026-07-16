import { forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const Eraser = forwardRef<Svg, IconProps>(
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
        <Path d="M22 21h-9m0 0H8.46a1 1 0 0 1-.76-.35L2.6 14.7a1 1 0 0 1 .06-1.35L13.29 2.7a1 1 0 0 1 1.42 0l7.12 7.12a1 1 0 0 1 .03 1.38z" /><Path d="M5.64 10.59 14 19" />
      </IconBase>
    );
  }
);

Eraser.displayName = 'Eraser';