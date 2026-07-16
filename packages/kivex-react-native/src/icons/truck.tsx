import { forwardRef } from 'react';
import Svg, { Circle, Path } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const Truck = forwardRef<Svg, IconProps>(
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
        <Circle cx={7} cy={18} r={2} /><Circle cx={17} cy={18} r={2} /><Path d="M5 18H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12" /><Path d="M9 18h6" /><Path d="M19 18h1a2 2 0 0 0 2-2v-3.54a2 2 0 0 0-.65-1.47l-3.78-3.46A2 2 0 0 0 16.22 7H14" />
      </IconBase>
    );
  }
);

Truck.displayName = 'Truck';