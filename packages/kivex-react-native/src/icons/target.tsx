import { forwardRef } from 'react';
import Svg, { Circle } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const Target = forwardRef<Svg, IconProps>(
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
        <Circle cx={12} cy={12} r={10} /><Circle cx={12} cy={12} r={6} /><Circle cx={12} cy={12} r={2} />
      </IconBase>
    );
  }
);

Target.displayName = 'Target';