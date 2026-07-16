import { forwardRef } from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const MapPinned = forwardRef<Svg, IconProps>(
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
        <Path d="m12.04 12.94 3.2-5.03a3.84 3.84 0 1 0-6.48 0l3.2 5.03a.04.04 0 0 0 .08 0" /><Circle cx={12} cy={5.5} r={0.5} /><Path d="m3 21 5.19-1.78a2 2 0 0 1 1.27-.01l4.83 1.59a2 2 0 0 0 1.25 0L21 19" /><Path d="M21 11v8" /><Path d="M3 14v7" /><Path d="M9 11v8" /><Path d="M15 14v6" /><Path d="M9 10.5 3 14" /><Path d="m13 12.5 1.19.82a2 2 0 0 0 2.05.13L21 11" />
      </IconBase>
    );
  }
);

MapPinned.displayName = 'MapPinned';