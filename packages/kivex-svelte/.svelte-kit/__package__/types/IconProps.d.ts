export interface IconProps {
    size?: number | string;
    color?: string;
    strokeWidth?: number | string;
    ref?: (el: SVGSVGElement) => void;
    [key: string]: any;
}
