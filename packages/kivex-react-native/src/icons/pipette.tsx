import { forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const Pipette = forwardRef<Svg, IconProps>(
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
        <Path d="M13.64 7.26 7.1 14.03l-.15.23L6 18m0 0c-2 2-.35.13 0 0m0 0 4.18-.7a1 1 0 0 0 .32-.2l6.36-6.6" /><Path d="m15.31 5.41 2.7-2.7a2.34 2.34 0 0 1 3.27-.1c.92.87.96 2.3.09 3.2l-2.83 2.83" /><Path d="M19.07 7.76a2 2 0 0 1-2.83 2.83l-2.83-2.83a2 2 0 0 1 2.83-2.83" />
      </IconBase>
    );
  }
);

Pipette.displayName = 'Pipette';