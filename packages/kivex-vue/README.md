<p align="center">
  <a href="https://github.com/motionmind2007/Kivex">
    <img src="https://raw.githubusercontent.com/MotionMind2007/Kivex/main/assets/kivex-logo.png" alt="Kivex Logo" width="150"/>
  </a>
</p>

<p align="center">
  <strong>kivex-vue</strong><br>
  The official Vue implementation of the Kivex (Kinetic Vector Exchange) Icon library.
</p>

<div align="center">

  [![npm](https://img.shields.io/npm/v/kivex-vue?color=blue)](https://www.npmjs.com/package/kivex-vue)
  ![NPM Downloads](https://img.shields.io/npm/dw/kivex-vue)
  [![License](https://img.shields.io/badge/license-MIT-green)](https://github.com/motionmind2007/Kivex/blob/main/LICENSE)

</div>

<p align="center">
  <a href="https://github.com/motionmind2007/Kivex">Main Repo</a>
  ·
  <a href="https://github.com/motionmind2007/Kivex/blob/main/LICENSE">License</a>
</p>

# kivex-vue

Implementation of the lightweight, pixel-perfect, and dynamic Kivex icon library for Vue applications.

## Installation

```sh
npm install kivex-vue
```
```sh
yarn add kivex-vue
```
```sh
pnpm add kivex-vue
```
```sh
bun add kivex-vue
```

## Usage
Every icon can be imported directly as a clean Vue component. They accept all standard SVG properties including custom size, color, and strokeWidth.

```tsx
<script setup lang="ts">
import {Home, Search, Settings}  from "kivex-vue";
</script>

<template>
  <main>
    <!-- Default render -->
    <Home/>

    <!-- Styled with props -->
    <Search :size="32" :strokeWidth="2.5" color="#3b82f6"/>
  
    <!-- Target custom CSS classes -->
    <Settings :size="24" class="icon-spin"/>
  </main>
</template>
```

## Documentation
For full documentation, architecture design, and core guidelines, please visit our main repository at [Kivex System Root](https://github.com/motionmind2007/kivex).

## License
kivex-vue is licensed under the MIT license. See [LICENSE](LICENSE).