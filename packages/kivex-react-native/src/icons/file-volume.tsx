import { forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const FileVolume = forwardRef<Svg, IconProps>(
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
        <Path d="M4 10V4a2 2 0 0 1 2-2h7.17a2 2 0 0 1 1.42.59L19.4 7.4a2 2 0 0 1 .6 1.43V20a2 2 0 0 1-2 2h-3" /><Path d="M13 2v5a2 2 0 0 0 2 2h5" /><Path d="M3 19.07v-3.14a1 1 0 0 1 1-1h1.4a1 1 0 0 0 .66-.24l1.11-.97a.5.5 0 0 1 .83.38v6.95a.5.5 0 0 1-.78.4l-1.74-1.2a1 1 0 0 0-.57-.18H4a1 1 0 0 1-1-1" /><Path d="M11.99 14.53c.76.79 1.82 2.98.02 5.5" />
      </IconBase>
    );
  }
);

FileVolume.displayName = 'FileVolume';