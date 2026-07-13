<script lang="ts">import IconBase from '../components/IconBase.svelte';
export let size = 24;
export let color = 'currentColor';
export let strokeWidth = 2;
export let ref = () => { };
</script>

<IconBase {size} {color} {strokeWidth} {ref} {...$$restProps}>
  <circle cx={10} cy={8} r={5} /><path d="M18 21C18 16.5817 14.4183 13 10 13C5.58172 13 2 16.5817 2 21" /><path d="M18 4C18.8333 5.33333 20 8.9 18 12.5" /><path d="M18 12.5C19.5 13.8333 22.4 17.4 22 21" />
</IconBase>