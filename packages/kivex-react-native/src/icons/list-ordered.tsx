import { forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const ListOrdered = forwardRef<Svg, IconProps>(
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
        <Path d="M13 5h8" /><Path d="M13 12h8" /><Path d="M13 19h8" /><Path d="M4.5 4h1a.5.5 0 0 1 .5.5V10m0 0H4.5M6 10h1.5" /><Path d="m4.5 15.29.63-.54a1.63 1.63 0 1 1 2.12 2.47L6 18.29l-.97.83a.5.5 0 0 0 .32.88H9" />
      </IconBase>
    );
  }
);

ListOrdered.displayName = 'ListOrdered';