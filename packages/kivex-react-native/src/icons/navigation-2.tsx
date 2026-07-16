import { forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const Navigation2 = forwardRef<Svg, IconProps>(
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
        <Path d="M11.98 2.04a.02.02 0 0 1 .04 0l7.96 18.92-.02.02-7.6-2.85a1 1 0 0 0-.71 0l-7.6 2.85a.02.02 0 0 1-.03-.02z" />
      </IconBase>
    );
  }
);

Navigation2.displayName = 'Navigation2';