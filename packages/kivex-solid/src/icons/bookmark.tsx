import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export function Bookmark(props: IconProps) {
  return (
    <IconBase
      size={props.size ?? 24}
      color={props.color ?? 'currentColor'}
      strokeWidth={props.strokeWidth ?? 2}
      {...props}
    >
      <path d="M6 4h12v16l-6-5.5l-6 5.5z" />
    </IconBase>
  );
}

Bookmark.displayName = 'Bookmark';