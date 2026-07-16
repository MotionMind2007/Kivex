import { forwardRef } from 'react';
import Svg, { Path, Rect } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const GlobeLock = forwardRef<Svg, IconProps>(
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
        <Path d="M21.8 14A10 10 0 1 1 11 2.05" /><Path d="M2 12h8" /><Path d="M11 2.32C9.28 3.42 8 7.33 8 12c0 5.52 1.79 10 4 10 1.64 0 3.38-3.47 4-7" /><Rect width={8} height={5} x={13} y={6} rx={1} /><Path d="M15 5V4a2 2 0 1 1 4 0v1" />
      </IconBase>
    );
  }
);

GlobeLock.displayName = 'GlobeLock';