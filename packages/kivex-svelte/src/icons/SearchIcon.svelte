<script lang="ts">
  import IconBase from '../components/IconBase.svelte';
  import type { IconProps } from '../types/IconProps.js';

  export let size: IconProps['size'] = 24;
  export let color: IconProps['color'] = 'currentColor';
  export let strokeWidth: IconProps['strokeWidth'] = 2;
  export let ref: (el: SVGSVGElement) => void = () => {};
</script>

<IconBase {size} {color} {strokeWidth} {ref} {...$$restProps}>
  <circle cx={11} cy={11} r={8} /><path d="M16.9471 17.0541L21 21" />
</IconBase>