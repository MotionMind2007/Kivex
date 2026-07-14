//
export function generateIconCode(svgChildren: string): string {
  return `<script setup lang="ts">

interface IconProps {
  size?: string | number;
  color?: string;
  strokeWidth?: string | number;
}

withDefaults(defineProps<IconProps>(), {
  size: 24,
  color: 'currentColor',
  strokeWidth: 2
});
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    :stroke="color"
    :stroke-width="strokeWidth"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${svgChildren}
  </svg>
</template>
`
}