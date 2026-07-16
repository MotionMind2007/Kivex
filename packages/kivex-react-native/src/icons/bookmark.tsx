import { forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const Bookmark = forwardRef<Svg, IconProps>(
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
        <Path d="M5 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v16.23a1 1 0 0 1-1.52.85l-4.96-3a1 1 0 0 0-1.04 0l-4.96 3A1 1 0 0 1 5 20.24z" />
      </IconBase>
    );
  }
);

Bookmark.displayName = 'Bookmark';