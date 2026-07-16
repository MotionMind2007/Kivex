import { forwardRef } from 'react';
import Svg, { Rect, Path } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const BriefcaseMedical = forwardRef<Svg, IconProps>(
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
        <Rect width={20} height={14} x={2} y={6} rx={2} /><Path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /><Path d="M6 6v14" /><Path d="M18 6v14" /><Path d="M12 11v4" /><Path d="M10 13h4" />
      </IconBase>
    );
  }
);

BriefcaseMedical.displayName = 'BriefcaseMedical';