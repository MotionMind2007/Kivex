import { forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const Upload = forwardRef<Svg, IconProps>(
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
        <Path d="M3 14v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5" /><Path d="m7 8 4.65-4.65a.5.5 0 0 1 .7 0L17 8" /><Path d="M12 4v11" />
      </IconBase>
    );
  }
);

Upload.displayName = 'Upload';