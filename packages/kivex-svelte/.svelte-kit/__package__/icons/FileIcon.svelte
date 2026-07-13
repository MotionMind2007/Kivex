<script lang="ts">import IconBase from '../components/IconBase.svelte';
export let size = 24;
export let color = 'currentColor';
export let strokeWidth = 2;
export let ref = () => { };
</script>

<IconBase {size} {color} {strokeWidth} {ref} {...$$restProps}>
  <path d="M4 4C4 2.89543 4.89543 2 6 2H12H13.1716C13.702 2 14.2107 2.21071 14.5858 2.58579L19.4142 7.41421C19.7893 7.78929 20 8.29799 20 8.82843V12V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V4Z" /><path d="M13 2V7C13 8.10457 13.8954 9 15 9H20" />
</IconBase>