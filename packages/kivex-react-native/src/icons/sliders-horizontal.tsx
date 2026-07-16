import { forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const SlidersHorizontal = forwardRef<Svg, IconProps>(
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
        <Path d="M3 5h7" /><Path d="M14 5V3m0 2v2m0-2h7" /><Path d="M8 12v-2m0 2v2m0-2H3" /><Path d="M12 12h9" /><Path d="M3 19h9" /><Path d="M16 19v-2m0 2v2m0-2h5" />
      </IconBase>
    );
  }
);

SlidersHorizontal.displayName = 'SlidersHorizontal';