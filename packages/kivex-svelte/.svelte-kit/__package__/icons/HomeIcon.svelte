<script lang="ts">import IconBase from '../components/IconBase.svelte';
export let size = 24;
export let color = 'currentColor';
export let strokeWidth = 2;
export let ref = () => { };
</script>

<IconBase {size} {color} {strokeWidth} {ref} {...$$restProps}>
  <path d="M3 9.46838C3 9.1716 3.13182 8.89015 3.35982 8.70015L11.3598 2.03349C11.7307 1.72445 12.2693 1.72445 12.6402 2.03349L20.6402 8.70015C20.8682 8.89015 21 9.1716 21 9.46837V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9.46838Z" /><path d="M9 21V14C9 13.4477 9.44772 13 10 13H14C14.5523 13 15 13.4477 15 14V21" />
</IconBase>