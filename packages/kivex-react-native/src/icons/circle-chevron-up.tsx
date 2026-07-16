import { forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const CircleChevronUp = forwardRef<Svg, IconProps>(
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
        <Path d="m8 14 3.65-3.65a.5.5 0 0 1 .7 0L16 14" /><Path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20" />
      </IconBase>
    );
  }
);

CircleChevronUp.displayName = 'CircleChevronUp';