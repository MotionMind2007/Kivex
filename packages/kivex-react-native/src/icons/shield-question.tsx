import { forwardRef } from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const ShieldQuestion = forwardRef<Svg, IconProps>(
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
        <Path d="M4 5.18a.23.23 0 0 1 .23-.23 11.4 11.4 0 0 0 6.79-2.29l.8-.6a.3.3 0 0 1 .35 0l.81.6a11.5 11.5 0 0 0 6.8 2.3.23.23 0 0 1 .22.22v6.72a10.3 10.3 0 0 1-7.98 10.02h-.04A10.3 10.3 0 0 1 4 11.9z" /><Path d="M9.17 9A3 3 0 0 1 15 10c0 1.66-1.34 3.5-3 3.5" /><Circle cx={12} cy={17} r={0.5} />
      </IconBase>
    );
  }
);

ShieldQuestion.displayName = 'ShieldQuestion';