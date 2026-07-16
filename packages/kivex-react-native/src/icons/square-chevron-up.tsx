import { forwardRef } from 'react';
import Svg, { Path, Rect } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const SquareChevronUp = forwardRef<Svg, IconProps>(
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
        <Path d="m8 14 3.65-3.65a.5.5 0 0 1 .7 0L16 14" /><Rect width={18} height={18} x={3} y={3} rx={1} />
      </IconBase>
    );
  }
);

SquareChevronUp.displayName = 'SquareChevronUp';