import { forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const CircleCheckBig = forwardRef<Svg, IconProps>(
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
        <Path d="M21.54 9q.45 1.43.46 3a10 10 0 1 1-7-9.54" /><Path d="m9.5 10.5 2.23 1.85a1 1 0 0 0 1.44-.23L21 3" />
      </IconBase>
    );
  }
);

CircleCheckBig.displayName = 'CircleCheckBig';