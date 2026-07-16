import { forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const SunMoon = forwardRef<Svg, IconProps>(
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
        <Path d="M9.06 21c3.07 0 5.32-2.26 5.93-5.22.08-.41-.28-.77-.7-.75-5.73.23-5.68-3.17-5.36-5.3.06-.4-.26-.78-.67-.73a6.03 6.03 0 0 0 .8 12" /><Path d="M15.97 12C15.8 10 15 8.07 12 8" /><Path d="M12 4V2" /><Path d="M20 12h2" /><Path d="M18 6.5 19.5 5" />
      </IconBase>
    );
  }
);

SunMoon.displayName = 'SunMoon';