import { forwardRef } from 'react';
import Svg, { Rect, Path } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const Rows3 = forwardRef<Svg, IconProps>(
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
        <Rect width={18} height={18} x={3} y={3} rx={2} /><Path d="M3 9h18" /><Path d="M3 15h18" />
      </IconBase>
    );
  }
);

Rows3.displayName = 'Rows3';