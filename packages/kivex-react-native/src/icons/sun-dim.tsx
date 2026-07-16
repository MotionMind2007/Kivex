import { forwardRef } from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const SunDim = forwardRef<Svg, IconProps>(
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
        <Path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8" /><Circle cx={4} cy={12} r={0.5} /><Circle cx={12} cy={4} r={0.5} /><Circle cx={20} cy={12} r={0.5} /><Circle cx={12} cy={20} r={0.5} /><Circle cx={6} cy={18} r={0.5} /><Circle cx={6} cy={6} r={0.5} /><Circle cx={18} cy={6} r={0.5} /><Circle cx={18} cy={18} r={0.5} />
      </IconBase>
    );
  }
);

SunDim.displayName = 'SunDim';