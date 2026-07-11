import { JSX, splitProps } from 'solid-js';

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

export function IconBase(props: IconBaseProps) {
  const [local, others] = splitProps(props, [
    'size',
    'color',
    'strokeWidth',
    'children',
    'ref',
  ]);

  return (
    <svg
      ref={local.ref}
      xmlns="http://www.w3.org/2000/svg"
      width={local.size ?? 24}
      height={local.size ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke={local.color ?? 'currentColor'}
      stroke-width={local.strokeWidth ?? 2}
      stroke-linecap="round"
      stroke-linejoin="round"
      {...others}
    >
      {local.children}
    </svg>
  );
}

IconBase.displayName = 'IconBase';