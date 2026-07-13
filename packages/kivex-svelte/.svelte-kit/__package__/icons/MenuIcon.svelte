<script lang="ts">import IconBase from '../components/IconBase.svelte';
export let size = 24;
export let color = 'currentColor';
export let strokeWidth = 2;
export let ref = () => { };
</script>

<IconBase {size} {color} {strokeWidth} {ref} {...$$restProps}>
  <rect x={4} y={5} width={16} height={2} rx={1} /><rect x={4} y={11} width={16} height={2} rx={1} /><rect x={4} y={17} width={16} height={2} rx={1} />
</IconBase>