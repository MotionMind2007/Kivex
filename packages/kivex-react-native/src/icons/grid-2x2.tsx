import { forwardRef } from 'react';
import Svg, { Rect, Path } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const Grid2x2 = forwardRef<Svg, IconProps>(
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
        <Rect width={18} height={18} x={3} y={3} rx={1} /><Path d="M3 12h18" /><Path d="M12 3v18" />
      </IconBase>
    );
  }
);

Grid2x2.displayName = 'Grid2x2';