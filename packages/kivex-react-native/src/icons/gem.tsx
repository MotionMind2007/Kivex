import { forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const Gem = forwardRef<Svg, IconProps>(
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
        <Path d="M12.02 21.98a.02.02 0 0 1-.04 0L2.02 9.03A.02.02 0 0 1 2.04 9h19.92a.02.02 0 0 1 .02.03z" /><Path d="m2 9 3.4-5.11A2 2 0 0 1 7.08 3h9.86a2 2 0 0 1 1.66.89L22 9" /><Path d="M10.67 3 8.3 8.3a2 2 0 0 0-.07 1.44L12 21" /><Path d="m13.33 3 2.36 5.3a2 2 0 0 1 .07 1.44L12 21" />
      </IconBase>
    );
  }
);

Gem.displayName = 'Gem';