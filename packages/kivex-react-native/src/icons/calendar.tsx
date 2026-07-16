import { forwardRef } from 'react';
import Svg, { Rect, Path } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const Calendar = forwardRef<Svg, IconProps>(
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
        <Rect width={18} height={18} x={3} y={4} rx={2} /><Path d="M8 2v4" /><Path d="M16 2v4" /><Path d="M3 10h18" />
      </IconBase>
    );
  }
);

Calendar.displayName = 'Calendar';