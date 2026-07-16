<p align="center">
  <a href="https://github.com/motionmind2007/Kivex">
    <img src="https://raw.githubusercontent.com/MotionMind2007/Kivex/main/assets/kivex-logo.png" alt="Kivex Logo" width="150"/>
  </a>
</p>

<p align="center">
  <strong>kivex-react</strong><br>
  The official React implementation of the Kivex (Kinetic Vector Exchange) Icon library.
</p>

<div align="center">

  [![npm](https://img.shields.io/npm/v/kivex-react?color=blue)](https://www.npmjs.com/package/kivex-react)
  ![NPM Downloads](https://img.shields.io/npm/dw/kivex-react)
  [![License](https://img.shields.io/badge/license-MIT-green)](https://github.com/motionmind2007/Kivex/blob/main/LICENSE)

</div>

<p align="center">
  <a href="https://github.com/motionmind2007/Kivex">Main Repo</a>
  ·
  <a href="https://github.com/motionmind2007/Kivex/blob/main/LICENSE">License</a>
</p>

# kivex-react

Implementation of the lightweight, pixel-perfect, and dynamic Kivex icon library for React applications.

## Installation

```sh
npm install kivex-react
```
```sh
yarn add kivex-react
```
```sh
pnpm add kivex-react
```
```sh
bun add kivex-react
```

## Usage
Every icon can be imported directly as a clean React component. They accept all standard SVG properties including custom size, color, strokeWidth, and className.

```tsx
import React from 'react';
import { Home, Search, Settings } from 'kivex-react';

function App() {
  return (
    <div>
      {/* Default render */}
      <Home/>

      {/* Styled with props */}
      <Search color="#3b82f6" size={32} strokeWidth={2.5}/>
      
      {/* Target custom CSS classes */}
      <Settings className="settings-icon" size={24}/>
    </div>
  );
}

export default App;
```

## Documentation
For full documentation, architecture design, and core guidelines, please visit our main repository at [Kivex System Root](https://github.com/motionmind2007/kivex).

## License
kivex-react is licensed under the MIT license. See [LICENSE](LICENSE).