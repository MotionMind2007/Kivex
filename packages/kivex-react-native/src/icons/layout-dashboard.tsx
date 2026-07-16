import { forwardRef } from 'react';
import Svg, { Rect } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const LayoutDashboard = forwardRef<Svg, IconProps>(
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
        <Rect width={7} height={9} x={3} y={3} rx={0.5} /><Rect width={7} height={9} x={14} y={12} rx={0.5} /><Rect width={7} height={5} x={3} y={16} rx={0.5} /><Rect width={7} height={5} x={14} y={3} rx={0.5} />
      </IconBase>
    );
  }
);

LayoutDashboard.displayName = 'LayoutDashboard';