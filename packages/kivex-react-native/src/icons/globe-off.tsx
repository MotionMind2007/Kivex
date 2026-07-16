import { forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const GlobeOff = forwardRef<Svg, IconProps>(
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
        <Path d="M21.17 16a10 10 0 0 0 .83-4A10 10 0 0 0 12 2a10 10 0 0 0-4 .83" /><Path d="M4.86 5A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 7-2.86" /><Path d="M2 12h10" /><Path d="M17 12h5" /><Path d="M15.98 11c-.1-2.52-.62-4.74-1.36-6.36C13.76 2.7 12.76 2 12 2s-1.75.71-2.62 2.64" /><Path d="M8.2 9a23 23 0 0 0-.2 3c0 2.93.54 5.53 1.38 7.36C10.25 21.3 11.25 22 12 22s1.75-.71 2.63-2.64c.42-.93.77-2.08 1.01-3.36" /><Path d="m2 2 20 20" />
      </IconBase>
    );
  }
);

GlobeOff.displayName = 'GlobeOff';