import { forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const TruckElectric = forwardRef<Svg, IconProps>(
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
        <Path d="M7 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4" /><Path d="M17 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4" /><Path d="M5 18H4a2 2 0 0 1-2-2v-5m12 7V6a2 2 0 0 0-2-2H8" /><Path d="M4 2 2.13 5.74a.12.12 0 0 0 .14.17l2.51-.84a.12.12 0 0 1 .16.15L4 8.5" /><Path d="M9 18h6" /><Path d="M19 18h1a2 2 0 0 0 2-2v-3.54a2 2 0 0 0-.65-1.47l-3.78-3.46A2 2 0 0 0 16.22 7H14" />
      </IconBase>
    );
  }
);

TruckElectric.displayName = 'TruckElectric';