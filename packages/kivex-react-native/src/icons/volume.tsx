import { forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const Volume = forwardRef<Svg, IconProps>(
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
        <Path d="M2 15.57V8.43a1 1 0 0 1 1-1h4.22a1 1 0 0 0 .6-.2l3.38-2.6a.5.5 0 0 1 .8.39V19.1a.5.5 0 0 1-.76.42l-4.55-2.81a1 1 0 0 0-.53-.15H3a1 1 0 0 1-1-1" />
      </IconBase>
    );
  }
);

Volume.displayName = 'Volume';