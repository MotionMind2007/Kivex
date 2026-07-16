import { forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const Handbag = forwardRef<Svg, IconProps>(
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
        <Path d="M20.25 21H3.75a1.5 1.5 0 0 1-1.48-1.73L3.74 9.7A2 2 0 0 1 5.72 8h12.56a2 2 0 0 1 1.98 1.7l1.47 9.57A1.5 1.5 0 0 1 20.25 21" /><Path d="M16 12V6a4 4 0 0 0-8 0v6" />
      </IconBase>
    );
  }
);

Handbag.displayName = 'Handbag';