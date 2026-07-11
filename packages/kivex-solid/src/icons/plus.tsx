import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export function Plus(props: IconProps) {
  return (
    <IconBase
      size={props.size ?? 24}
      color={props.color ?? 'currentColor'}
      strokeWidth={props.strokeWidth ?? 2}
      {...props}
    >
      <rect x={11} y={5} width={2} height={14} rx={1} /><rect x={19} y={11} width={2} height={14} rx={1} transform="rotate(90 19 11)" />
    </IconBase>
  );
}

Plus.displayName = 'Plus';