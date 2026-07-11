import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export function DraftBook(props: IconProps) {
  return (
    <IconBase
      size={props.size ?? 24}
      color={props.color ?? 'currentColor'}
      strokeWidth={props.strokeWidth ?? 2}
      {...props}
    >
      <path d="M4 18V20C4 21.1046 4.89543 22 6 22H13.1429H17.7143H19.8571M4 18H13.1429H17.7143H19.8571M4 18V4C4 2.89543 4.89543 2 6 2H18C19.1046 2 20 2.89543 20 4V17.8571C20 17.936 19.936 18 19.8571 18M20 22H19.8571M19.8571 18L19.2808 18.5379C18.4337 19.3286 18.4337 20.6714 19.2808 21.4621L19.8571 22" /><path d="M9.6 14H12M14.4 14H12M12 14V6M12 6H8.5C8.22386 6 8 6.22386 8 6.5V7.77778M12 6H15.5C15.7761 6 16 6.22386 16 6.5V7.77778" />
    </IconBase>
  );
}

DraftBook.displayName = 'DraftBook';