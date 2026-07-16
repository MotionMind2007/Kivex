import { forwardRef } from 'react';
import Svg, { Circle, Path } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const UserCheck = forwardRef<Svg, IconProps>(
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
        <Circle cx={10} cy={8} r={5} /><Path d="M15 14.76A8 8 0 0 0 2 21" /><Path d="m16 19.33 1.6 1.34a.5.5 0 0 0 .72-.07L22 16" />
      </IconBase>
    );
  }
);

UserCheck.displayName = 'UserCheck';