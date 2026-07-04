import { forwardRef } from 'react';
    import { IconBase } from '../components/IconBase';
    import type { IconProps } from '../types/IconProps';

export const Folder = forwardRef<SVGSVGElement, IconProps>(
  (
    { 
  
        size = 24, 
        color = 'currentColor', 
        strokeWidth = 2 
        
        },
        ref
  ) => {
    return (
      <IconBase
        ref={ref}
        size={size}
        color={color}
        strokeWidth={strokeWidth}
      >
        <path d="M3 7C3 5.89543 3.89543 5 5 5H7.4C8.02951 5 8.62229 5.29639 9 5.8L10.05 7.2C10.4277 7.70361 11.0205 8 11.65 8H19C20.1046 8 21 8.89543 21 10V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V13.5V8.75V7Z" stroke="black" strokeWidth={2} />
      </IconBase>
    );
  }
);

Folder.displayName = 'Folder';