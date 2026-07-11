import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export function Search(props: IconProps) {
  return (
    <IconBase
      size={props.size ?? 24}
      color={props.color ?? 'currentColor'}
      strokeWidth={props.strokeWidth ?? 2}
      {...props}
    >
      <circle cx={11} cy={11} r={8} /><path d="M16.9471 17.0541L21 21" />
    </IconBase>
  );
}

Search.displayName = 'Search';