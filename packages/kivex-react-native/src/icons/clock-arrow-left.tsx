import { forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const ClockArrowLeft = forwardRef<Svg, IconProps>(
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
        <Path d="M22 12a10 10 0 1 0-10 10" /><Path d="m18 13-3.91 3.9q-.18.1 0 .2L18 21" /><Path d="M15 17h7" /><Path d="M12 6v5l1 1" />
      </IconBase>
    );
  }
);

ClockArrowLeft.displayName = 'ClockArrowLeft';