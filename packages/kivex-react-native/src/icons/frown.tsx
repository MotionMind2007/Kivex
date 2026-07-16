import { forwardRef } from 'react';
import Svg, { Circle, Path } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const Frown = forwardRef<Svg, IconProps>(
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
        <Circle cx={12} cy={12} r={10} /><Circle cx={8} cy={10} r={0.5} /><Circle cx={16} cy={10} r={0.5} /><Path d="M8 16a4.6 4.6 0 0 1 8 0" />
      </IconBase>
    );
  }
);

Frown.displayName = 'Frown';