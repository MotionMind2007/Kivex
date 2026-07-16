import { forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const PaintBucket = forwardRef<Svg, IconProps>(
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
        <Path d="m10 5 2.3-2.3a1 1 0 0 1 1.4 0l6.95 6.95a.5.5 0 0 1 0 .7l-8.03 8.03a3 3 0 0 1-4.24 0l-3.76-3.76a3 3 0 0 1 0-4.24L7 8" /><Path d="m8 3.5 3 3" /><Path d="M4 12.5h14.5" /><Path d="M19.98 15.06a.02.02 0 0 1 .04 0l1.35 4.04a1.44 1.44 0 1 1-2.74 0z" />
      </IconBase>
    );
  }
);

PaintBucket.displayName = 'PaintBucket';