import { forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const ChevronsDown = forwardRef<Svg, IconProps>(
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
        <Path d="m7 6 4.7 4.87a.4.4 0 0 0 .6 0L17 6" /><Path d="m7 13 4.7 4.87a.4.4 0 0 0 .6 0L17 13" />
      </IconBase>
    );
  }
);

ChevronsDown.displayName = 'ChevronsDown';