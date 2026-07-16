import { forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const PackageCheck = forwardRef<Svg, IconProps>(
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
        <Path d="m15.38 20.13-1.13.62-1.28.71a2 2 0 0 1-1.94 0l-7-3.89A2 2 0 0 1 3 15.82V8.18a2 2 0 0 1 1.03-1.75l7-3.89a2 2 0 0 1 1.94 0l7 3.89A2 2 0 0 1 21 8.18V11" /><Path d="m17 16 1.84 1.84a.2.2 0 0 0 .3-.02L22 14" /><Path d="m3.5 7.5 7.56 4a2 2 0 0 0 1.88 0l7.56-4" /><Path d="M12 12v9" /><Path d="m8.5 4.5 8 5" />
      </IconBase>
    );
  }
);

PackageCheck.displayName = 'PackageCheck';