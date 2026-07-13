<script lang="ts">
  import IconBase from '../components/IconBase.svelte';
  import type { IconProps } from '../types/IconProps.js';

  export let size: IconProps['size'] = 24;
  export let color: IconProps['color'] = 'currentColor';
  export let strokeWidth: IconProps['strokeWidth'] = 2;
  export let ref: (el: SVGSVGElement) => void = () => {};
</script>

<IconBase {size} {color} {strokeWidth} {ref} {...$$restProps}>
  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" /><circle cx={12} cy={13} r={4} />
</IconBase>