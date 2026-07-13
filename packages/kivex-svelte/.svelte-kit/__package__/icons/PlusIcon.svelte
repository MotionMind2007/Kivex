<script lang="ts">import IconBase from '../components/IconBase.svelte';
export let size = 24;
export let color = 'currentColor';
export let strokeWidth = 2;
export let ref = () => { };
</script>

<IconBase {size} {color} {strokeWidth} {ref} {...$$restProps}>
  <rect x={11} y={5} width={2} height={14} rx={1} /><rect x={19} y={11} width={2} height={14} rx={1} transform="rotate(90 19 11)" />
</IconBase>