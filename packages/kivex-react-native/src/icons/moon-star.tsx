import { forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const MoonStar = forwardRef<Svg, IconProps>(
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
        <Path d="M12 21c4.57 0 7.92-3.38 8.82-7.8.12-.62-.4-1.14-1.03-1.12-8.53.34-8.45-4.73-7.98-7.92.09-.6-.37-1.16-.99-1.08A9 9 0 0 0 12 21" /><Path d="M19.54 3.26a1 1 0 0 0 .95.7h1.73l-1.4 1.01a1 1 0 0 0-.37 1.12L21 7.74l-1.4-1.02a1 1 0 0 0-1.18 0l-1.4 1.02.54-1.65a1 1 0 0 0-.37-1.12l-1.4-1.02h1.73a1 1 0 0 0 .95-.69L19 1.62z" />
      </IconBase>
    );
  }
);

MoonStar.displayName = 'MoonStar';