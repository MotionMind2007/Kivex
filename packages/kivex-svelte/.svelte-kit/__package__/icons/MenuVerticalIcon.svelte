<script lang="ts">import IconBase from '../components/IconBase.svelte';
export let size = 24;
export let color = 'currentColor';
export let strokeWidth = 2;
export let ref = () => { };
</script>

<IconBase {size} {color} {strokeWidth} {ref} {...$$restProps}>
  <circle cx={12} cy={9} r={1} /><circle cx={12} cy={12} r={1} /><circle cx={12} cy={15} r={1} />
</IconBase>