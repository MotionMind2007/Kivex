<p align="center">
  <a href="https://github.com/motionmind2007/Kivex">
    <img src="https://raw.githubusercontent.com/MotionMind2007/Kivex/main/assets/kivex-logo.png" alt="Kivex Logo" width="150"/>
  </a>
</p>

<p align="center">
  <strong>kivex-icons</strong><br>
  A pixel-perfect open-source SVG icon library for JavaScript.
</p>

<div align="center">

  [![npm](https://img.shields.io/npm/v/kivex-icons?color=blue)](https://www.npmjs.com/package/kivex-icons)
  ![NPM Downloads](https://img.shields.io/npm/dw/kivex-icons)
  [![License](https://img.shields.io/badge/license-MIT-green)](https://github.com/motionmind2007/Kivex/blob/main/LICENSE)

</div>

<p align="center">
  <a href="https://github.com/motionmind2007/Kivex">Main Repo</a>
  ·
  <a href="https://github.com/motionmind2007/Kivex/blob/main/LICENSE">License</a>
</p>

## kivex-icons

A lightweight, pixel-perfect, and dynamic icon library for web developers.

## Why Kivex Icons?
- **Lightweight**: Minimalist SVG construction.
- **Dynamic**: Easily control size and color via JavaScript.
- **Easy to use**: Designed for vanilla JS and modern frameworks.

## Quick Start
```sh
npm install kivex-icons
```
```sh
pnpm add kivex-icons
```
```sh
yarn add kivex-icons
```
```sh
bun add kivex-icons
```

## Usage
### Kivex Icons [![npm](https://img.shields.io/npm/v/kivex-icons?color=blue)](https://www.npmjs.com/package/kivex-icons) provides multiple professional ways to inject icons into your application depending on your use case.

1. Direct Icon Import (Recommended for Bundlers)
You can import individual icons directly. Each icon is exposed as a structured object ready to be parsed.
```js
import { Menu, buildKivexIcon } from 'kivex-icons';

// Build a real SVG DOM element
const menuIcon = buildKivexIcon(Menu, { size: 30, color: "#47acff", strokeWidth: 2 });

// Append directly to the DOM
document.getElementById('app').appendChild(menuIcon);
```

2. Auto-Replacing HTML Elements (Vanilla JS / CDN Style)
Drop `<i>` placeholder tags in your HTML with data-kivex attributes, and let Kivex take care of the rest dynamically!
```html
<i data-kivex="menu" data-size="30" data-stroke-width="2" class="my-custom-class"></i>

<script type="module">
    import { replaceKivexIcons } from 'kivex-icons';
    
    // Automatically replaces all <i> placeholders with fully configured SVGs
    replaceKivexIcons();
</script>
```

3. Server-Side Rendering & String Generation (Node.js / Express / SSR)
Need a raw HTML string instead of a DOM element? Use getKivexIconString which works flawlessly in environments without a browser window object (No document is not defined errors!).
```js
import { Menu, getKivexIconString } from 'kivex-icons';

// Generates a pure '<svg>...</svg>' HTML string
const menuString = getKivexIconString(Menu, { size: 24, color: 'currentColor' });
```


## CDN Usage
If you prefer not to use a package manager, you can include Kivex Icons directly in your HTML:
```html
<div id="icon-container"></div>
<i data-kivex="home" data-size="40" data-color="red"></i>

<script type="module">
    import { buildKivexIcon, replaceKivexIcons, Home } from 'https://cdn.jsdelivr.net/npm/kivex-icons/dist/index.js';

    // Method 1: Append Child
    const homeIcon = buildKivexIcon(Home, { size: 32 });
    document.getElementById('icon-container').appendChild(homeIcon);

    // Method 2: Auto-Replace placeholders
    replaceKivexIcons();
</script>
```

### License
This project is licensed under the MIT License. You are free to use, modify, and distribute this library for any project, including commercial applications.

## Documentation
For full documentation, architecture design, and core guidelines, please visit our main repository at [Kivex System Root](https://github.com/motionmind2007/kivex).

## Contribution
Feel free to open issues or contribute to the library! Check out our GitHub repository.

## Author
[MotionMind2007](https://github.com/MotionMind2007)