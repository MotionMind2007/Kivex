import { forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const EyeClosed = forwardRef<Svg, IconProps>(
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
        <Path d="M21 8c0 3.31-4.03 6-9 6s-9-2.69-9-6" /><Path d="m5 12-3 3" /><Path d="m19 12 3 3" /><Path d="m9 14-1 4" /><Path d="m14 14 1 4" />
      </IconBase>
    );
  }
);

EyeClosed.displayName = 'EyeClosed';