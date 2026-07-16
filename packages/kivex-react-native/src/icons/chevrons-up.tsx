import { forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const ChevronsUp = forwardRef<Svg, IconProps>(
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
        <Path d="m7 11 4.65-4.65a.5.5 0 0 1 .7 0L17 11" /><Path d="m7 18 4.65-4.65a.5.5 0 0 1 .7 0L17 18" />
      </IconBase>
    );
  }
);

ChevronsUp.displayName = 'ChevronsUp';