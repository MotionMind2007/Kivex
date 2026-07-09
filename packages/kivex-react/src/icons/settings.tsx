import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const Settings = forwardRef<SVGSVGElement, IconProps>(
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
        <path d="M12.8 22h-1.6a1 1 0 0 1-1-1v-1.82c0-1.586-1.757-2.541-3.088-1.679l-1.334.865a1 1 0 0 1-1.456-.428l-.945-2.1a1 1 0 0 1 .426-1.284l1.45-.806c1.372-.762 1.372-2.734 0-3.496l-1.45-.806a1 1 0 0 1-.426-1.284l.945-2.1a1 1 0 0 1 1.456-.428l1.334.865c1.33.862 3.088-.093 3.088-1.679V3a1 1 0 0 1 1-1h1.6a1 1 0 0 1 1 1v1.82c0 1.586 1.757 2.541 3.088 1.679l1.334-.865a1 1 0 0 1 1.456.428l.945 2.1a1 1 0 0 1-.427 1.284l-1.449.806c-1.372.762-1.372 2.734 0 3.496l1.45.806a1 1 0 0 1 .426 1.284l-.945 2.1a1 1 0 0 1-1.456.428l-1.334-.865c-1.33-.862-3.088.093-3.088 1.679V21a1 1 0 0 1-1 1Z" /><circle cx={12} cy={12} r={3} />
      </IconBase>
    );
  }
);

Settings.displayName = 'Settings';