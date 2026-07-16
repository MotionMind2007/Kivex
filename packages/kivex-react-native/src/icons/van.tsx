import { forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const Van = forwardRef<Svg, IconProps>(
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
        <Path d="M7 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4" /><Path d="M17 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4" /><Path d="M5 18H4c-1.1 0-2-.77-2-1.71V7.7C2 6.77 2.9 6 4 6h11.56a2 2 0 0 1 1.9 1.37L19 12" /><Path d="M9 18h6" /><Path d="M19.55 18H20a2 2 0 0 0 2-2v-.7a3 3 0 0 0-.83-2.08l-.28-.3a3 3 0 0 0-2.17-.92H14a1 1 0 0 1-1-1V6" />
      </IconBase>
    );
  }
);

Van.displayName = 'Van';