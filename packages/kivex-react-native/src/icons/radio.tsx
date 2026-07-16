import { forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const Radio = forwardRef<Svg, IconProps>(
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
        <Path d="M18 20a10 10 0 0 0 4-8 10 10 0 0 0-4-8" /><Path d="M6 20a10 10 0 0 1-4-8 10 10 0 0 1 4-8" /><Path d="M8.26 16.69A6 6 0 0 1 6 12c0-1.9.88-3.59 2.26-4.69" /><Path d="M15.74 7.3A6 6 0 0 1 18 12a6 6 0 0 1-2.26 4.7" /><Path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
      </IconBase>
    );
  }
);

Radio.displayName = 'Radio';