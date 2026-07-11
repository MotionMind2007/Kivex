import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export function Chat(props: IconProps) {
  return (
    <IconBase
      size={props.size ?? 24}
      color={props.color ?? 'currentColor'}
      strokeWidth={props.strokeWidth ?? 2}
      {...props}
    >
      <path d="M2 6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V15.3043C22 16.4089 21.1046 17.3043 20 17.3043H12H7.65891C7.23095 17.3043 6.81428 17.4416 6.47012 17.696L2.7972 20.4108C2.46715 20.6547 2 20.4191 2 20.0087V6Z" /><path d="M6 8L17 8" /><path d="M6 13H15" />
    </IconBase>
  );
}

Chat.displayName = 'Chat';