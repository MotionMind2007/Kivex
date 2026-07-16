<p align="center">
  <a href="https://github.com/motionmind2007/Kivex">
    <img src="https://raw.githubusercontent.com/MotionMind2007/Kivex/main/assets/kivex-logo.png" alt="Kivex Logo" width="150"/>
  </a>
</p>

<p align="center">
  <strong>kivex-react-native</strong><br>
  The official React Native implementation of the Kivex (Kinetic Vector Exchange) Icon library.
</p>

<div align="center">

  [![npm](https://img.shields.io/npm/v/kivex-react-native?color=blue)](https://www.npmjs.com/package/kivex-react-native)
  ![NPM Downloads](https://img.shields.io/npm/dw/kivex-react-native)
  [![License](https://img.shields.io/badge/license-MIT-green)](https://github.com/motionmind2007/Kivex/blob/main/LICENSE)

</div>

<p align="center">
  <a href="https://github.com/motionmind2007/Kivex">Main Repo</a>
  ·
  <a href="https://github.com/motionmind2007/Kivex/blob/main/LICENSE">License</a>
</p>

# kivex-react-native

Implementation of the lightweight, pixel-perfect, and dynamic Kivex icon library for React Native applications.

## Installation

```sh
npm install kivex-react-native
```
```sh
yarn add kivex-react-native
```
```sh
pnpm add kivex-react-native
```
```sh
bun add kivex-react-native
```

## Usage
Every icon can be imported directly as a clean React Native component. They accept all standard SVG properties including custom size, color, and strokeWidth.

```tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Home, Search, Settings } from 'kivex-react-native';

function App() {
  return (
    <View style={styles.container}>
      {/* Default render */}
      <Home/>

      {/* Styled with props */}
      <Search color="#3b82f6" size={32} strokeWidth={2.5}/>
      
      {/* Dynamic styling using component props */}
      <Settings color="#6b7280" size={24}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
```

## Documentation
For full documentation, architecture design, and core guidelines, please visit our main repository at [Kivex System Root](https://github.com/motionmind2007/kivex).

## License
kivex-react-native is licensed under the MIT license. See [LICENSE](LICENSE).