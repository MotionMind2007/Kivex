import { forwardRef } from 'react';
import Svg, { Rect } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const LayoutGrid = forwardRef<Svg, IconProps>(
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
        <Rect width={7} height={7} x={3} y={3} rx={0.5} /><Rect width={7} height={7} x={14} y={3} rx={0.5} /><Rect width={7} height={7} x={3} y={14} rx={0.5} /><Rect width={7} height={7} x={14} y={14} rx={0.5} />
      </IconBase>
    );
  }
);

LayoutGrid.displayName = 'LayoutGrid';