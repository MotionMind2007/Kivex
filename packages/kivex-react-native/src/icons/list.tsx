import { forwardRef } from 'react';
import Svg, { Circle, Path } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const List = forwardRef<Svg, IconProps>(
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
        <Circle cx={3} cy={5} r={1} /><Circle cx={3} cy={12} r={1} /><Circle cx={3} cy={19} r={1} /><Path d="M8 5h13" /><Path d="M8 12h13" /><Path d="M8 19h13" />
      </IconBase>
    );
  }
);

List.displayName = 'List';