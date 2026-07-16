import { forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const CreditCard = forwardRef<Svg, IconProps>(
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
        <Path d="M2 10v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-7M2 10V7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v3M2 10h20" />
      </IconBase>
    );
  }
);

CreditCard.displayName = 'CreditCard';