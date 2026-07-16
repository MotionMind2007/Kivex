import { forwardRef } from 'react';
import Svg, { Circle, Path } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const Globe = forwardRef<Svg, IconProps>(
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
        <Circle cx={12} cy={12} r={10} /><Path d="M2 12h20" /><Path d="M12 2c.75 0 1.75.71 2.63 2.64C15.46 6.47 16 9.07 16 12s-.54 5.53-1.37 7.36C13.75 21.3 12.75 22 12 22s-1.75-.71-2.62-2.64C8.54 17.53 8 14.93 8 12s.54-5.53 1.38-7.36C10.25 2.7 11.25 2 12 2" />
      </IconBase>
    );
  }
);

Globe.displayName = 'Globe';