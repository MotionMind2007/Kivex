import { forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const LayoutTemplate = forwardRef<Svg, IconProps>(
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
        <Path d="M10.71 14H4.3c-.72 0-1.3.45-1.3 1v5c0 .55.58 1 1.29 1h6.42c.71 0 1.29-.45 1.29-1v-5c0-.55-.58-1-1.29-1" /><Path d="M20.29 14H16.7c-.39 0-.71.45-.71 1v5c0 .55.32 1 .71 1h3.58c.39 0 .71-.45.71-1v-5c0-.55-.32-1-.71-1" /><Path d="M20 3H4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1" />
      </IconBase>
    );
  }
);

LayoutTemplate.displayName = 'LayoutTemplate';