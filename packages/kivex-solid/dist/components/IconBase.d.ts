import { JSX } from 'solid-js';
export interface IconProps {
    size?: number | string;
    color?: string;
    strokeWidth?: number | string;
    ref?: (el: SVGSVGElement) => void;
    [key: string]: any;
}
interface IconBaseProps extends IconProps {
    children: JSX.Element;
}
export declare function IconBase(props: IconBaseProps): JSX.Element;
export declare namespace IconBase {
    var displayName: string;
}
export {};
