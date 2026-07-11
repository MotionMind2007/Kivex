import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export function Menu(props: IconProps) {
  return (
    <IconBase
      size={props.size ?? 24}
      color={props.color ?? 'currentColor'}
      strokeWidth={props.strokeWidth ?? 2}
      {...props}
    >
      <rect x={4} y={5} width={16} height={2} rx={1} /><rect x={4} y={11} width={16} height={2} rx={1} /><rect x={4} y={17} width={16} height={2} rx={1} />
    </IconBase>
  );
}

Menu.displayName = 'Menu';