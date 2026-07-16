export function generateIconCode(svgChildren: string, componentName: string, usedTags: string[]): string {
  const svgImports = [...usedTags].join(', ');
  return `import { forwardRef } from 'react';
import Svg, { ${svgImports} } from 'react-native-svg';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const ${componentName} = forwardRef<Svg, IconProps>(
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
        ${svgChildren}
      </IconBase>
    );
  }
);

${componentName}.displayName = '${componentName}';`;
}