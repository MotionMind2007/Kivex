import { forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const CalendarCheck = forwardRef<Svg, IconProps>(
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
        <Path d="M19 4H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2" /><Path d="M8 2v4" /><Path d="M16 2v4" /><Path d="M3 10h18" /><Path d="m9 16.4 1.93 1.54a.1.1 0 0 0 .13 0L15 14" />
      </IconBase>
    );
  }
);

CalendarCheck.displayName = 'CalendarCheck';