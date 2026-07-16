import { forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const BriefcaseConveyorBelt = forwardRef<Svg, IconProps>(
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
        <Path d="M18.4 6H5.6C4.72 6 4 6.58 4 7.29v6.42c0 .71.72 1.29 1.6 1.29h12.8c.88 0 1.6-.58 1.6-1.29V7.3c0-.72-.72-1.3-1.6-1.3" /><Path d="M8 15V3.44C8 2.64 8.9 2 10 2h4c1.1 0 2 .65 2 1.44V15" /><Path d="M4 19h16" /><Path d="M6 19v2" /><Path d="M10 19v2" /><Path d="M14 19v2" /><Path d="M18 19v2" />
      </IconBase>
    );
  }
);

BriefcaseConveyorBelt.displayName = 'BriefcaseConveyorBelt';