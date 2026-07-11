import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export function Thumb(props: IconProps) {
  return (
    <IconBase
      size={props.size ?? 24}
      color={props.color ?? 'currentColor'}
      strokeWidth={props.strokeWidth ?? 2}
      {...props}
    >
      <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
    </IconBase>
  );
}

Thumb.displayName = 'Thumb';