import { forwardRef } from 'react';
import Svg, { G, Path, Defs, ClipPath, Rect } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const PenLine = forwardRef<Svg, IconProps>(
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
        <G clipPath="url(#a)"><Path d="m8.21 20.06 12.9-13.65a2.74 2.74 0 1 0-3.97-3.76L4.19 16.35q-.11.12-.18.28l-2.28 5.03a.5.5 0 0 0 .63.67l5.47-2.01a1 1 0 0 0 .39-.26Z" /><Path d="M12 21h9" /></G><Defs><ClipPath id="a"><Rect width={24} height={24} /></ClipPath></Defs>
      </IconBase>
    );
  }
);

PenLine.displayName = 'PenLine';