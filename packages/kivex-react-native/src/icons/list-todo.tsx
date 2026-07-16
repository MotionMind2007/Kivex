import { forwardRef } from 'react';
import Svg, { Path, Rect } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const ListTodo = forwardRef<Svg, IconProps>(
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
        <Path d="M13 5h8" /><Path d="M13 12h8" /><Path d="M13 19h8" /><Rect width={6} height={6} x={3} y={4} rx={1} /><Path d="m3 18 1.65 1.65a.5.5 0 0 0 .7 0L9 16" />
      </IconBase>
    );
  }
);

ListTodo.displayName = 'ListTodo';