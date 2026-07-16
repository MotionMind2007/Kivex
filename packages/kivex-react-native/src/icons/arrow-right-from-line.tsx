import { forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const ArrowRightFromLine = forwardRef<Svg, IconProps>(
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
        <Path d="M7 12h12" /><Path d="M3 5v14" /><Path d="m15 6 5.85 5.65a.5.5 0 0 1 0 .7L15 18" />
      </IconBase>
    );
  }
);

ArrowRightFromLine.displayName = 'ArrowRightFromLine';