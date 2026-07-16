import { forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const Notification = forwardRef<Svg, IconProps>(
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
        <Path d="M5 9a7 7 0 0 1 14 0v4.06a4 4 0 0 0 .42 1.79l1.16 2.3a4 4 0 0 1 .42 1.8V19H3v-.06a4 4 0 0 1 .42-1.79l1.16-2.3a4 4 0 0 0 .42-1.8z" /><Path d="M10 22h4" />
      </IconBase>
    );
  }
);

Notification.displayName = 'Notification';