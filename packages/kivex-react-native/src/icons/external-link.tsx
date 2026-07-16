import { forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const ExternalLink = forwardRef<Svg, IconProps>(
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
        <Path d="M18 13v7.58c0 .23-.19.42-.42.42H3.42a.4.4 0 0 1-.42-.42V6.42c0-.23.19-.42.42-.42H11" /><Path d="M15 3h5.5a.5.5 0 0 1 .5.5V9" /><Path d="M10 14 20 4" />
      </IconBase>
    );
  }
);

ExternalLink.displayName = 'ExternalLink';