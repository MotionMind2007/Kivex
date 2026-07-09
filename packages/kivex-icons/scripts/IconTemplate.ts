export function generateIconCode(componentName: string, svgChildren: string[]): string {

    const formatedChild = svgChildren
        .map(child => `        \`${child}\`,`)
        .join('\n');

    return `import type { IconProps } from '../types/IconProps.ts';
export const ${componentName}: IconProps = {
    name: '${componentName}',
    children: [
${formatedChild}
    ]
};`;
}