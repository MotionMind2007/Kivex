import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export function MenuVertical(props: IconProps) {
  return (
    <IconBase
      size={props.size ?? 24}
      color={props.color ?? 'currentColor'}
      strokeWidth={props.strokeWidth ?? 2}
      {...props}
    >
      <circle cx={12} cy={9} r={1} /><circle cx={12} cy={12} r={1} /><circle cx={12} cy={15} r={1} />
    </IconBase>
  );
}

MenuVertical.displayName = 'MenuVertical';