import { forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const TagPlus = forwardRef<Svg, IconProps>(
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
        <Path d="m16 6-4.24-3.72a1 1 0 0 0-.69-.28H3a1 1 0 0 0-1 1v8.57a1 1 0 0 0 .31.73l9.5 9.01a1 1 0 0 0 1.4-.04L17.27 17" /><Path d="M6.5 7a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" /><Path d="M19 8v6" /><Path d="M16 11h6" />
      </IconBase>
    );
  }
);

TagPlus.displayName = 'TagPlus';