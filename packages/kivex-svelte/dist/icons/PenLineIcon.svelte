<script lang="ts">import IconBase from '../components/IconBase.svelte';
export let size = 24;
export let color = 'currentColor';
export let strokeWidth = 2;
export let ref = () => { };
</script>

<IconBase {size} {color} {strokeWidth} {ref} {...$$restProps}>
  <g clip-path="url(#clip0_47_35)"><path d="M8.21428 20.0643L21.1165 6.4117C22.155 5.31286 22.106 3.58026 21.0072 2.54182C19.9083 1.50338 18.1757 1.55234 17.1373 2.65117L4.18896 16.3525C4.11277 16.4332 4.05053 16.5259 4.00478 16.6269L1.72771 21.6562C1.54474 22.0603 1.93957 22.4848 2.35589 22.3316L7.83287 20.3159C7.97772 20.2626 8.10827 20.1765 8.21428 20.0643Z" /><path d="M12 21H21" /></g><defs><clipPath id="clip0_47_35"><rect width={24} height={24} /></clipPath></defs>
</IconBase>