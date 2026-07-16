import { forwardRef } from 'react';
import Svg, { Path, Rect } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const SimCard = forwardRef<Svg, IconProps>(
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
        <Path d="M3 4a2 2 0 0 1 2-2h9.35a2 2 0 0 1 1.62.83l4.65 6.42a2 2 0 0 1 .38 1.18V20a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><Rect width={8} height={9} x={8} y={9} rx={0.5} /><Path d="M12 9v2.98q0 .02.02.02H16" /><Path d="M8.5 15h3.48l.02.02V18" />
      </IconBase>
    );
  }
);

SimCard.displayName = 'SimCard';