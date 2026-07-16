import { forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const PlaySquare = forwardRef<Svg, IconProps>(
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
        <Path d="M9 15.12V8.88c0-.28.3-.47.55-.33l5.25 2.77a.38.38 0 0 1 .03.65l-5.25 3.47a.37.37 0 0 1-.58-.32" /><Path d="M3 20V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1" />
      </IconBase>
    );
  }
);

PlaySquare.displayName = 'PlaySquare';