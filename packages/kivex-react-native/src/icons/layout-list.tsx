import { forwardRef } from 'react';
import Svg, { Rect, Path } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const LayoutList = forwardRef<Svg, IconProps>(
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
        <Rect width={7} height={7} x={3} y={3} rx={1} /><Rect width={7} height={7} x={3} y={14} rx={1} /><Path d="M14 20h7" /><Path d="M14 15h7" /><Path d="M14 9h7" /><Path d="M14 4h7" />
      </IconBase>
    );
  }
);

LayoutList.displayName = 'LayoutList';