import { forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const ArrowLeftFromLine = forwardRef<Svg, IconProps>(
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
        <Path d="m9 7-5.87 5.8c-.17.1-.17.3 0 .4L9 19" /><Path d="M5 13h12" /><Path d="M21 6v14" />
      </IconBase>
    );
  }
);

ArrowLeftFromLine.displayName = 'ArrowLeftFromLine';