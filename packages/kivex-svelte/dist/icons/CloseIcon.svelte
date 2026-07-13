<script lang="ts">import IconBase from '../components/IconBase.svelte';
export let size = 24;
export let color = 'currentColor';
export let strokeWidth = 2;
export let ref = () => { };
</script>

<IconBase {size} {color} {strokeWidth} {ref} {...$$restProps}>
  <rect x={7.75736} y={6.34314} width={14} height={2} rx={1} transform="rotate(45 7.75736 6.34314)" /><rect x={16.2426} y={6.34314} width={2} height={14} rx={1} transform="rotate(45 16.2426 6.34314)" />
</IconBase>