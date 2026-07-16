import { forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const ListChevronsUpDown = forwardRef<Svg, IconProps>(
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
        <Path d="m14 8 3.25-2.9a.4.4 0 0 1 .5 0L21 8" /><Path d="m14 16 3.25 2.9a.4.4 0 0 0 .5 0L21 16" /><Path d="M3 5h7" /><Path d="M3 12h7" /><Path d="M3 19h7" />
      </IconBase>
    );
  }
);

ListChevronsUpDown.displayName = 'ListChevronsUpDown';