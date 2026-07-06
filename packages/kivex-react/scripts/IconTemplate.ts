// This function generates the TypeScript code for a React icon component based on the provided SVG children and component name.
export function generateIconCode(svgChildren: string, componentName: string): string {
  return `import { forwardRef } from 'react';
    import { IconBase } from '../components/IconBase';
    import type { IconProps } from '../types/IconProps';

export const ${componentName} = forwardRef<SVGSVGElement, IconProps>(
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
        ${svgChildren}
      </IconBase>
    );
  }
);

${componentName}.displayName = '${componentName}';`;
}