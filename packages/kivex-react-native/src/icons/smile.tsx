import { forwardRef } from 'react';
import Svg, { Circle, Path } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const Smile = forwardRef<Svg, IconProps>(
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
        <Circle cx={12} cy={12} r={10} /><Path d="M7 15a6.15 6.15 0 0 0 10 0" /><Circle cx={8} cy={10} r={0.5} /><Circle cx={16} cy={10} r={0.5} />
      </IconBase>
    );
  }
);

Smile.displayName = 'Smile';