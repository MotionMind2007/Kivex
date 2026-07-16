<p align="center">
  <a href="https://github.com/motionmind2007/Kivex">
    <img src="https://raw.githubusercontent.com/MotionMind2007/Kivex/main/assets/kivex-logo.png" alt="Kivex Logo" width="150"/>
  </a>
</p>

<p align="center">
  <strong>kivex-solid</strong><br>
  The official SolidJS implementation of the Kivex (Kinetic Vector Exchange) Icon library.
</p>

<div align="center">

  [![npm](https://img.shields.io/npm/v/kivex-solid?color=blue)](https://www.npmjs.com/package/kivex-solid)
  ![NPM Downloads](https://img.shields.io/npm/dw/kivex-solid)
  [![License](https://img.shields.io/badge/license-MIT-green)](https://github.com/motionmind2007/Kivex/blob/main/LICENSE)

</div>

<p align="center">
  <a href="https://github.com/motionmind2007/Kivex">Main Repo</a>
  ·
  <a href="https://github.com/motionmind2007/Kivex/blob/main/LICENSE">License</a>
</p>

# kivex-solid

Implementation of the lightweight, pixel-perfect, and dynamic Kivex icon library for **SolidJS** applications. Built to leverage Solid's ultra-fast fine-grained reactivity and direct DOM rendering.

## Installation

```sh
npm install kivex-solid
```
```sh
yarn add kivex-solid
```
```sh
pnpm add kivex-solid
```
```sh
bun add kivex-solid
```

## Usage
Every icon can be imported directly as a native SolidJS component. Since Solid doesn't use a Virtual DOM, these icons render as optimized real DOM elements instantly, fully supporting reactive props.

They accept all standard SVG properties including custom size, color, strokeWidth, and class bindings.

```tsx
import { Home, Search, Settings } from 'kivex-solid';

function App() {
  return (
    <div>
      {/* Default render */}
      <Home />

      {/* Styled with reactive props */}
      <Search color="#3b82f6" size={32} stroke-width={2.5} />
      
      {/* Target custom CSS classes */}
      <Settings class="icon-spin" size={24} />
    </div>
  );
}

export default App;
```

## Why kivex-solid?
**Fine-Grained Performance:** Zero VDOM overhead. SolidJS direct DOM updates make these icons incredibly fast during color or size switches.

**Lightweight:** Compiles down to minimal code, keeping your bundle sizes ultra-small.

**Solid Standard Compliant:** Uses standard `class` attribute instead of React's `className`, aligning perfectly with Solid's conventions.

## Documentation
For full documentation, architecture design, and core guidelines, please visit our main repository at [Kivex System Root](https://github.com/motionmind2007/kivex).

## License
kivex-solid is licensed under the MIT license. See [LICENSE](LICENSE).