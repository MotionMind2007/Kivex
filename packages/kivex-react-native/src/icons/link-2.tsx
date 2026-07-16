import { forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const Link2 = forwardRef<Svg, IconProps>(
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
        <Path d="M8 7H7a5 5 0 0 0 0 10h1m8-10h1a5 5 0 0 1 0 10h-1" /><Path d="M7 12h9" />
      </IconBase>
    );
  }
);

Link2.displayName = 'Link2';