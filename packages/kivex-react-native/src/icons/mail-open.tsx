import { forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const MailOpen = forwardRef<Svg, IconProps>(
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
        <Path d="M2 10.89a2 2 0 0 1 .66-1.49l8-7.2a2 2 0 0 1 2.68 0l8 7.2a2 2 0 0 1 .66 1.5V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z" /><Path d="m3 10 7.89 5.26a2 2 0 0 0 2.22 0L21 10" />
      </IconBase>
    );
  }
);

MailOpen.displayName = 'MailOpen';