import { forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const Trash = forwardRef<Svg, IconProps>(
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
        <Path d="M3 6h2m16 0h-2M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M8 6h8M8 6H5m11 0h3M5 6v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6" />
      </IconBase>
    );
  }
);

Trash.displayName = 'Trash';