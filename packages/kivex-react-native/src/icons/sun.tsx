import { forwardRef } from 'react';
import Svg, { Circle, Path } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const Sun = forwardRef<Svg, IconProps>(
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
        <Circle cx={12} cy={12} r={4} /><Path d="M12 4V2" /><Path d="M12 20v2" /><Path d="M4 12H2" /><Path d="M20 12h2" /><Path d="M6.5 5.5 5 4" /><Path d="M17.5 5.5 19 4" /><Path d="M18.5 18.5 20 20" /><Path d="m4 20 1.5-1.5" />
      </IconBase>
    );
  }
);

Sun.displayName = 'Sun';