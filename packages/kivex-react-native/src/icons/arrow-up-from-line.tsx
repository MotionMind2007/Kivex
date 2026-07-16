import { forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const ArrowUpFromLine = forwardRef<Svg, IconProps>(
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
        <Path d="m6 9 5.65-5.85a.5.5 0 0 1 .7 0L18 9" /><Path d="M12 3.8V17" /><Path d="M5 21h14" />
      </IconBase>
    );
  }
);

ArrowUpFromLine.displayName = 'ArrowUpFromLine';