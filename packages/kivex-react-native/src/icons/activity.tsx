import { forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const Activity = forwardRef<Svg, IconProps>(
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
        <Path d="M3 12h2.42a.1.1 0 0 0 .1-.08l2.4-9.57c.02-.1.16-.1.19 0l5.8 19.37a.1.1 0 0 0 .2 0l3.61-9.66a.1.1 0 0 1 .1-.06H21" />
      </IconBase>
    );
  }
);

Activity.displayName = 'Activity';