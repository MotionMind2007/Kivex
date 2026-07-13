<script lang="ts">export let size = 24;
export let color = 'currentColor';
export let strokeWidth = 2;
export let ref = () => { };
// Create a variable to hold the SVG element reference
let svgElement;
// Watch for changes to svgElement and call the ref callback
$: if (svgElement)
    ref(svgElement);
</script>

<svg
  bind:this={svgElement}
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  viewBox="0 0 24 24"
  fill="none"
  stroke={color}
  stroke-width={strokeWidth}
  stroke-linecap="round"
  stroke-linejoin="round"
  {...$$restProps}
>
  <slot />
</svg>