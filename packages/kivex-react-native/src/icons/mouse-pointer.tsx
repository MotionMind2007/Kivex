import { forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const MousePointer = forwardRef<Svg, IconProps>(
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
        <Path d="M9.95 19.88 3.05 3.1a.05.05 0 0 1 .06-.07l16.77 6.9a.05.05 0 0 1 0 .1l-6.43 2.14a2 2 0 0 0-1.27 1.27l-2.14 6.42a.05.05 0 0 1-.1 0Z" /><Path d="m13 13 6 6" />
      </IconBase>
    );
  }
);

MousePointer.displayName = 'MousePointer';