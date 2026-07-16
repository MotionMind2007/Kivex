import { forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const SwapHorizontal = forwardRef<Svg, IconProps>(
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
        <Path d="M8 3 4.13 6.8c-.17.11-.17.29 0 .4L8 11" /><Path d="M6 7h14" /><Path d="m16 13 3.65 3.65a.5.5 0 0 1 0 .7L16 21" /><Path d="M4 17h14" />
      </IconBase>
    );
  }
);

SwapHorizontal.displayName = 'SwapHorizontal';