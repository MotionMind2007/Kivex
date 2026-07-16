import { forwardRef } from 'react';
import Svg, { Path, Rect } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const SquareActivity = forwardRef<Svg, IconProps>(
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
        <Path d="M7 11.98h1.35l.05-.04 1.33-4.9c.01-.05.09-.05.1 0l3.24 9.92c.01.05.08.05.1 0l2.01-4.94.05-.04H17" /><Rect width={18} height={18} x={3} y={3} rx={2} />
      </IconBase>
    );
  }
);

SquareActivity.displayName = 'SquareActivity';