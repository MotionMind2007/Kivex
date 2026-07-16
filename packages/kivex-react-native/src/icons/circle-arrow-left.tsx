import { forwardRef } from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const CircleArrowLeft = forwardRef<Svg, IconProps>(
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
        <Path d="m12 8-3.91 3.8a.3.3 0 0 0 0 .4L12 16" /><Path d="M9 12h7" /><Circle cx={12} cy={12} r={10} />
      </IconBase>
    );
  }
);

CircleArrowLeft.displayName = 'CircleArrowLeft';