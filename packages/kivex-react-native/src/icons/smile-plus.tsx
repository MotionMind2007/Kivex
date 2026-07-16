import { forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const SmilePlus = forwardRef<Svg, IconProps>(
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
        <Path d="M21.95 11q.05.5.05 1A10 10 0 1 1 12 2q.5 0 1 .05" /><Path d="M7 15a6.15 6.15 0 0 0 10 0" /><Path d="M8 10.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" /><Path d="M16 10.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" /><Path d="M19 2v6" /><Path d="M16 5h6" />
      </IconBase>
    );
  }
);

SmilePlus.displayName = 'SmilePlus';