import { forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const Volume2 = forwardRef<Svg, IconProps>(
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
        <Path d="M2 15V9a1 1 0 0 1 1-1h3.67a1 1 0 0 0 .6-.2l2.93-2.2a.5.5 0 0 1 .8.4v12.12a.5.5 0 0 1-.76.43l-4-2.4a1 1 0 0 0-.52-.15H3a1 1 0 0 1-1-1" /><Path d="M16 9c.83 1 2 3.6 0 6" /><Path d="M19 5c2.33 2.33 5.6 8.4 0 14" />
      </IconBase>
    );
  }
);

Volume2.displayName = 'Volume2';