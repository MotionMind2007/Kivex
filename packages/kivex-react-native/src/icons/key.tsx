import { forwardRef } from 'react';
import Svg, { Circle, Path } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const Key = forwardRef<Svg, IconProps>(
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
        <Circle cx={7.5} cy={15.5} r={5.5} /><Path d="M11.5 11.5 20 2" /><Path d="m18.64 4.1 2.18 1.84a1 1 0 0 1 .08 1.45l-2.27 2.44a1 1 0 0 1-1.35.1l-1.99-1.55" />
      </IconBase>
    );
  }
);

Key.displayName = 'Key';