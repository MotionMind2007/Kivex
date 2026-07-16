import { forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const ArrowUpToLine = forwardRef<Svg, IconProps>(
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
        <Path d="m5 13 5.65-5.85a.5.5 0 0 1 .7 0L17 13" /><Path d="M11 8v13.2" /><Path d="M5 3h14" />
      </IconBase>
    );
  }
);

ArrowUpToLine.displayName = 'ArrowUpToLine';