import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export function Close(props: IconProps) {
  return (
    <IconBase
      size={props.size ?? 24}
      color={props.color ?? 'currentColor'}
      strokeWidth={props.strokeWidth ?? 2}
      {...props}
    >
      <rect x={7.75736} y={6.34314} width={14} height={2} rx={1} transform="rotate(45 7.75736 6.34314)" /><rect x={16.2426} y={6.34314} width={2} height={14} rx={1} transform="rotate(45 16.2426 6.34314)" />
    </IconBase>
  );
}

Close.displayName = 'Close';