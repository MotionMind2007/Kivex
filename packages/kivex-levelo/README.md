<p align="center">
  <a href="https://github.com/motionmind2007/Kivex">
    <img src="https://raw.githubusercontent.com/MotionMind2007/Kivex/main/assets/kivex-logo.png" alt="Kivex Logo" width="150"/>
  </a>
</p>

<p align="center">
  <strong>kivex-levelo</strong><br>
  The official LeveloJS implementation of the Kivex (Kinetic Vector Exchange) Icon library.
</p>

<div align="center">

  [![npm](https://img.shields.io/npm/v/kivex-levelo?color=blue)](https://www.npmjs.com/package/kivex-levelo)
  ![NPM Downloads](https://img.shields.io/npm/dw/kivex-levelo)
  [![License](https://img.shields.io/badge/license-MIT-green)](https://github.com/motionmind2007/Kivex/blob/main/LICENSE)

</div>

<p align="center">
  <a href="https://github.com/motionmind2007/Kivex">Main Repo</a>
  ·
  <a href="https://github.com/motionmind2007/Kivex/blob/main/LICENSE">License</a>
</p>

# kivex-levelo

Implementation of the lightweight, pixel-perfect, and dynamic Kivex icon library for **LeveloJS** applications. It seamlessly handles native SVG namespaces and reactivity under the LeveloJS core engine.

## Installation

```sh
npm install kivex-levelo
```
```sh
pnpm add kivex-levelo
```
```sh
yarn add kivex-levelo
```
```sh
bun add kivex-levelo
```

## Usage
Every icon can be imported directly as a LeveloJS component. They are built with compile-time optimized JSX factories and automatically inject the correct SVG namespaces (`xmlns` and `__namespace`).

They accept all standard properties including custom size, color, strokeWidth, and inline styles.

```jsx
import { Home, Search, Chat } from 'kivex-levelo';

function Mind() {
  return (
    <div style="padding: 20px; display: flex; gap: 15px;">
      {/* Default render (24x24) */}
      <Home/>

      {/* Styled with custom size and dynamic theme colors */}
      <Search color="#5b4fff" size="{48}" strokeWidth="{2.5}"/>
      
      {/* Custom styles and extra configurations */}
      <Chat color="#7c3aed" size="{32}" style="border: 1px solid #000;"/>
    </div>
  );
}

export default Mind;
```

## Why kivex-levelo?
- **Native Namespace Support:** Fully compatible with the *LeveloJS* rendering ecosystem without breaking SVG graphic outlines.

- **Zero Runtime Mutation:** Built using high-performance static compilation code generation, ensuring rapid DOM injection.

- **Tailored for LeveloJS:** Avoids raw string rendering hacks by leveraging native component structures.

## Documentation
For full documentation, architecture design, and core guidelines, please visit our main repository at [Kivex System Root](https://github.com/motionmind2007/kivex).

## License
kivex-levelo is licensed under the MIT license. See [LICENSE](LICENSE).