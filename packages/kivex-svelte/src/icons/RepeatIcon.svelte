<script lang="ts">
  import IconBase from '../components/IconBase.svelte';
  import type { IconProps } from '../types/IconProps.js';

  export let size: IconProps['size'] = 24;
  export let color: IconProps['color'] = 'currentColor';
  export let strokeWidth: IconProps['strokeWidth'] = 2;
  export let ref: (el: SVGSVGElement) => void = () => {};
</script>

<IconBase {size} {color} {strokeWidth} {ref} {...$$restProps}>
  <polyline points="1 4 1 10 7 10" /><polyline points="23 20 23 14 17 14" /><path d="M20.49 9.86A8 8 0 1 0 22 12" /><path d="M3.51 14.14A8 8 0 1 0 2 12" />
</IconBase>