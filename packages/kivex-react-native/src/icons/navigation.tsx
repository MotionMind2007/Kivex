import { forwardRef } from 'react';
import Svg, { G, Path, Defs, ClipPath, Rect } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const Navigation = forwardRef<Svg, IconProps>(
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
        <G clipPath="url(#a)"><Path d="m21.96 2.02.02.02-7.96 18.91a.02.02 0 0 1-.04 0l-2.84-7.58a1 1 0 0 0-.5-.55l-7.6-3.8a.02.02 0 0 1 0-.04z" /></G><Defs><ClipPath id="a"><Rect width={24} height={24} /></ClipPath></Defs>
      </IconBase>
    );
  }
);

Navigation.displayName = 'Navigation';