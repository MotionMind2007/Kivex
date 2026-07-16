import { forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const Map = forwardRef<Svg, IconProps>(
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
        <Path d="m3 8 4.74-3.25a2 2 0 0 1 2.2-.05l4.12 2.6a2 2 0 0 0 2.2-.04L21 4" /><Path d="m3 20 4.93-2.54a2 2 0 0 1 1.8-.02l4.3 2.12a2 2 0 0 0 1.77 0L21 17" /><Path d="M21 4v13" /><Path d="M3 8v12" /><Path d="M9 5v12" /><Path d="M15 8v11" />
      </IconBase>
    );
  }
);

Map.displayName = 'Map';