import { forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const Laugh = forwardRef<Svg, IconProps>(
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
        <Path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20" /><Path d="M16.93 14.14c-2.45 5.15-7.41 5.15-9.86 0a.1.1 0 0 1 .09-.14h9.68a.1.1 0 0 1 .1.14" /><Path d="M8 10.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" /><Path d="M16 10.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" />
      </IconBase>
    );
  }
);

Laugh.displayName = 'Laugh';