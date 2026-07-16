import { forwardRef } from 'react';
import Svg, { Rect, Path } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const Gift = forwardRef<Svg, IconProps>(
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
        <Rect width={16} height={10} x={4} y={11} rx={2} /><Path d="M5.5 11H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-1.5" /><Path d="M12 7v14" /><Path d="M8 7 5.85 4.85A1.67 1.67 0 0 1 7.03 2h.42q.55 0 1.04.25l.34.16c.76.38 1.38 1 1.76 1.76L12 7" /><Path d="m16 7 2.15-2.15A1.67 1.67 0 0 0 16.97 2h-.42q-.55 0-1.04.25l-.34.16c-.76.38-1.38 1-1.76 1.76L12 7" />
      </IconBase>
    );
  }
);

Gift.displayName = 'Gift';