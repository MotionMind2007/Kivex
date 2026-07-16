import { forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const Home = forwardRef<Svg, IconProps>(
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
        <Path d="M3 9.47a1 1 0 0 1 .36-.77l8-6.67a1 1 0 0 1 1.28 0l8 6.67a1 1 0 0 1 .36.77V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" /><Path d="M9 21v-7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v7" />
      </IconBase>
    );
  }
);

Home.displayName = 'Home';