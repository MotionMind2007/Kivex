import { forwardRef } from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const Wand = forwardRef<Svg, IconProps>(
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
        <Path d="m12 12-9 9" /><Path d="M10 9H8" /><Path d="m12 6-1-1" /><Path d="M15 4V2" /><Path d="M20 9h2" /><Path d="M15 14v2" /><Path d="m18 12 1 1" /><Path d="m18 6 1-1" /><Circle cx={15} cy={9} r={0.5} />
      </IconBase>
    );
  }
);

Wand.displayName = 'Wand';