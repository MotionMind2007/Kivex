import { forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const Sparkles = forwardRef<Svg, IconProps>(
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
        <Path d="m10.87 12.09-4.44-1.9a.2.2 0 0 1 0-.37l4.44-1.9a2 2 0 0 0 1.05-1.05l1.9-4.44a.2.2 0 0 1 .36 0l1.9 4.44a2 2 0 0 0 1.06 1.05l4.43 1.9a.2.2 0 0 1 0 .36l-4.44 1.9a2 2 0 0 0-1.05 1.06l-1.9 4.43a.2.2 0 0 1-.36 0l-1.9-4.43a2 2 0 0 0-1.06-1.05" /><Path d="m4.07 18.89-1.96-.84a.05.05 0 0 1 0-.1l1.96-.83a2 2 0 0 0 1.05-1.05l.83-1.96a.05.05 0 0 1 .1 0l.84 1.96a2 2 0 0 0 1.05 1.05l1.95.83a.05.05 0 0 1 0 .1l-1.96.84a2 2 0 0 0-1.05 1.05l-.83 1.95a.05.05 0 0 1-.1 0l-.84-1.95a2 2 0 0 0-1.05-1.05" /><Path d="M5 2v4" /><Path d="M3 4h4" />
      </IconBase>
    );
  }
);

Sparkles.displayName = 'Sparkles';