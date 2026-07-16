<p align="center">
  <a href="https://github.com/motionmind2007/Kivex">
    <img src="https://raw.githubusercontent.com/MotionMind2007/Kivex/main/assets/kivex-logo.png" alt="Kivex Logo" width="150"/>
  </a>
</p>

<p align="center">
  <strong>kivex-svelte</strong><br>
  The official Svelte implementation of the Kivex (Kinetic Vector Exchange) Icon library.
</p>

<div align="center">

  [![npm](https://img.shields.io/npm/v/kivex-svelte?color=blue)](https://www.npmjs.com/package/kivex-svelte)
  ![NPM Downloads](https://img.shields.io/npm/dw/kivex-svelte)
  [![License](https://img.shields.io/badge/license-MIT-green)](https://github.com/motionmind2007/Kivex/blob/main/LICENSE)

</div>

<p align="center">
  <a href="https://github.com/motionmind2007/Kivex">Main Repo</a>
  ·
  <a href="https://github.com/motionmind2007/Kivex/blob/main/LICENSE">License</a>
</p>

# kivex-svelte

Implementation of the lightweight, pixel-perfect, and dynamic Kivex icon library for svelte applications.

## Installation

```sh
npm install kivex-svelte
```
```sh
yarn add kivex-svelte
```
```sh
pnpm add kivex-svelte
```
```sh
bun add kivex-svelte
```

## Usage
Every icon can be imported directly as a clean Svelte component. They accept all standard SVG properties including custom size, color, strokeWidth, and class bindings.

```tsx
<script>
  import { Home, Search, Settings } from 'kivex-svelte';
</script>

<main>
  <!-- Default render -->
  <Home/>

  <!-- Styled with props -->
  <Search color="#3b82f6" size={32} strokeWidth={2.5}/>
  
  <!-- Target custom CSS classes -->
  <Settings class="icon-spin" size={24}/>
</main>
```

## Documentation
For full documentation, architecture design, and core guidelines, please visit our main repository at [Kivex System Root](https://github.com/motionmind2007/kivex).

## License
kivex-svelte is licensed under the MIT license. See [LICENSE](LICENSE).