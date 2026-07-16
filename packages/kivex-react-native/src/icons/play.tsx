import { forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const Play = forwardRef<Svg, IconProps>(
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
        <Path d="M5 20.15V3.65a1 1 0 0 1 1.46-.88L20.5 10.1a1 1 0 0 1 .08 1.72L6.55 21A1 1 0 0 1 5 20.15" />
      </IconBase>
    );
  }
);

Play.displayName = 'Play';