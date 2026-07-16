import { forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const SlidersVertical = forwardRef<Svg, IconProps>(
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
        <Path d="M5 3v7" /><Path d="M5 14v7m0-7H3m2 0h2" /><Path d="M12 8h2m-2 0h-2m2 0V3" /><Path d="M12 12v9" /><Path d="M19 3v9" /><Path d="M19 16h2m-2 0h-2m2 0v5" />
      </IconBase>
    );
  }
);

SlidersVertical.displayName = 'SlidersVertical';