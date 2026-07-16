import { forwardRef } from 'react';
import Svg, { Path, Rect, Circle } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const PenTool = forwardRef<Svg, IconProps>(
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
        <Path d="M10.73 16.34 6.1 14.33a1 1 0 0 1-.57-.68L2.8 2.85l.02-.02 10.82 2.68a1 1 0 0 1 .67.56l2.07 4.6" /><Rect width={10} height={4} x={10.66} y={17.68} rx={1} transform="rotate(-45.78 10.66 17.68)" /><Path d="m3.53 3.53 4.5 4.5" /><Circle cx={8.53} cy={8.53} r={0.5} />
      </IconBase>
    );
  }
);

PenTool.displayName = 'PenTool';