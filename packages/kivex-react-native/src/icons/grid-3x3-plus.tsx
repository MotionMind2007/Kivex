import { forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const Grid3x3Plus = forwardRef<Svg, IconProps>(
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
        <Path d="M12 21H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v8" /><Path d="M9 3v18" /><Path d="M15 3v12" /><Path d="M3 9h18" /><Path d="M3 15h12" /><Path d="M19 16v6" /><Path d="M16 19h6" />
      </IconBase>
    );
  }
);

Grid3x3Plus.displayName = 'Grid3x3Plus';