import { forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const Tags = forwardRef<Svg, IconProps>(
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
        <Path d="M7 9.33V2.77c0-.43.34-.77.77-.77h6.18q.3 0 .53.21l7.28 6.92c.3.3.32.78.03 1.08l-6.2 6.55a.77.77 0 0 1-1.09.03l-7.26-6.9A.8.8 0 0 1 7 9.32" /><Path d="M10.5 6a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" /><Path d="M3 8v3.17a2 2 0 0 0 .59 1.42l7.4 7.4a2 2 0 0 0 2.3.37L14 20" />
      </IconBase>
    );
  }
);

Tags.displayName = 'Tags';