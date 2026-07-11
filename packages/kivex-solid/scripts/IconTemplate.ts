export function generateIconCode(svgChildren: string, componentName: string): string {
  return `import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export function ${componentName}(props: IconProps) {
  return (
    <IconBase
      size={props.size ?? 24}
      color={props.color ?? 'currentColor'}
      strokeWidth={props.strokeWidth ?? 2}
      {...props}
    >
      ${svgChildren}
    </IconBase>
  );
}

${componentName}.displayName = '${componentName}';`;
}