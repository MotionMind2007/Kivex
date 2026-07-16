import { forwardRef } from 'react';
import Svg, { Rect, Path } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const Video = forwardRef<Svg, IconProps>(
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
        <Rect width={14} height={12} x={2} y={6} rx={1} /><Path d="m16 13 4.45 2.96a1 1 0 0 0 1.55-.83V8.87a1 1 0 0 0-1.55-.83L16 11" />
      </IconBase>
    );
  }
);

Video.displayName = 'Video';