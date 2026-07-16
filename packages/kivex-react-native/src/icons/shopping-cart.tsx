import { forwardRef } from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const ShoppingCart = forwardRef<Svg, IconProps>(
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
        <Path d="M5 7h14.5a2 2 0 0 1 1.96 2.43l-1.11 5A2 2 0 0 1 18.4 16H8.6a2 2 0 0 1-1.95-1.57zm0 0L4 2" /><Path d="M2 2h2" /><Circle cx={9} cy={21} r={1} /><Circle cx={18} cy={21} r={1} />
      </IconBase>
    );
  }
);

ShoppingCart.displayName = 'ShoppingCart';