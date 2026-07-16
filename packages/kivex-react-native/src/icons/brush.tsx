import { forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const Brush = forwardRef<Svg, IconProps>(
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
        <Path d="m2.25 21.32 2.5-6.67A1 1 0 0 1 5.7 14h12.62a1 1 0 0 1 .93.65l2.5 6.67a.5.5 0 0 1-.46.68H2.72a.5.5 0 0 1-.47-.68" /><Path d="M6 14a2 2 0 1 1 0-4h4" /><Path d="M14 10h4a2 2 0 1 1 0 4" /><Path d="M10 10V4a2 2 0 1 1 4 0v6" /><Path d="m8 22 1-4" /><Path d="m16 22-1-4" />
      </IconBase>
    );
  }
);

Brush.displayName = 'Brush';