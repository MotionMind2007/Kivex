import { getKivexIconString } from './getKivexIconString';
import * as icons from '../icons/index';

export function replaceKivexIcons(): void {
    if (typeof document === 'undefined') return;

    const elements = document.querySelectorAll('i[data-kivex]');
    elements.forEach((element) => {
        const iconName = element.getAttribute('data-kivex');
        if (!iconName) return;

        const options: Record<string, any> = {};
        const size = element.getAttribute('data-size');
        const color = element.getAttribute('data-color');
        const strokeWidth = element.getAttribute('data-stroke-width');

        size && (options.size = Number(size) || size);
        color && (options.color = color);
        strokeWidth && (options.strokeWidth = strokeWidth);

        Array.from(element.attributes).forEach((attr)=>{
            if (!['data-kivex', 'data-size', 'data-color', 'data-stroke-width'].includes(attr.name)) {
                options[attr.name] = attr.value;
            }
        });

        const finaleName = iconName
            .replace(/[-_](.)/g, (_, char) => char.toUpperCase())
            .replace(/^./, (char) => char.toUpperCase());

        const icon = icons[finaleName as keyof typeof icons];
        if (!icon) {console.warn(`[Kivex] Icon "${iconName}" not found in your package.`); return;}

        const svgString = getKivexIconString(icon, options);
        const parser = new DOMParser();
        const doc = parser.parseFromString(svgString, 'image/svg+xml');
        const svg = doc.documentElement as unknown as SVGElement;
        
        element.parentNode?.replaceChild(svg, element);
    })
}