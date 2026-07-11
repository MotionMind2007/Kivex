import { getKivexIconString } from "./getKivexIconString";
import type { IconAttrs } from "src/types/IconAttrs";
import type { IconProps } from "src/types/IconProps";

export function buildKivexIcon(icons: IconProps, options?: IconAttrs): SVGElement {
    if (typeof document === 'undefined') {
        throw new Error("[Kivex] buildKivexIcon can only be used in a browser environment.");
    }

    const svgString = getKivexIconString(icons, options);
    
    const parser = new DOMParser();
    const doc = parser.parseFromString(svgString, 'image/svg+xml');
    return doc.documentElement as unknown as SVGElement;
}