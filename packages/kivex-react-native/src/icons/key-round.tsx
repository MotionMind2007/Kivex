import { forwardRef } from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const KeyRound = forwardRef<Svg, IconProps>(
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
        <Path d="M10 8q0 1.21.45 2.28c.18.43.1.95-.24 1.26L2.33 18.7a1 1 0 0 0-.33.74V21a1 1 0 0 0 1 1h2.98l.02-.02v-1.96l.02-.02h2.96l.02-.02v-2.96l.02-.02h1.53a1 1 0 0 0 .75-.33l2.25-2.51c.27-.3.7-.4 1.1-.31Q15.3 14 16 14a6 6 0 1 0-6-6" /><Circle cx={16.5} cy={7.5} r={0.5} />
      </IconBase>
    );
  }
);

KeyRound.displayName = 'KeyRound';