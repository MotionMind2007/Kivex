export function createParentNodeNorma(componentName, children) {
    const SVG_NS = "http://www.w3.org/2000/svg";
    return `import { h } from 'levelojs';
    const SVG_NS = "${SVG_NS}";
export default function ${componentName}({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...rest
}) {
    return h("svg", {
        __namespace: SVG_NS,
        xmlns: SVG_NS,
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...rest
    }, [
${children}
    ]);
}
`;
}