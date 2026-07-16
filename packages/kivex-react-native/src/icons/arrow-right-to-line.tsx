import { forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const ArrowRightToLine = forwardRef<Svg, IconProps>(
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
        <Path d="M3 12.05h12" /><Path d="M21 5v14" /><Path d="m11 6 5.65 5.65a.5.5 0 0 1 0 .7L11 18" />
      </IconBase>
    );
  }
);

ArrowRightToLine.displayName = 'ArrowRightToLine';