//
import type { IconAttrs } from "../types/IconAttrs";
import type { IconProps } from "../types/IconProps";

export function getKivexIconString(
    icons: IconProps,
    options?: IconAttrs,
): string {
    const attrs: Record <string, any> = {
        xmlns: "http://www.w3.org/2000/svg",
        width: options?.size ?? 24,
        height: options?.size ?? 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: options?.color ?? "currentColor",
        'stroke-width': options?.strokeWidth ?? 2,
        'stroke-linecap': "round",
        'stroke-linejoin': "round",
    }

    const finalAttrs = {...attrs, ...options};

    delete finalAttrs.size;
    delete finalAttrs.color;
    delete finalAttrs.strokeWidth;

    const attrString = Object.entries(finalAttrs)
        .filter(([_, value]) => value !== null && value !== undefined)
        .map(([key, value]) => `${key}="${value}"`)
        .join(' ');

    return `<svg ${attrString}>\n${icons.children.join('\n')}\n</svg>`;
}