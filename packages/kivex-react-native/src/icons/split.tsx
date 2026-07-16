import { forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const Split = forwardRef<Svg, IconProps>(
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
        <Path d="m4 4 7.32 6.4a2 2 0 0 1 .68 1.5V22" /><Path d="M3 8V3.5a.5.5 0 0 1 .5-.5H8" /><Path d="M21 8V3.5a.5.5 0 0 0-.5-.5H16" /><Path d="m20 4-5 4" />
      </IconBase>
    );
  }
);

Split.displayName = 'Split';