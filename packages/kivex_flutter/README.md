<p align="center">
  <a href="https://github.com/motionmind2007/Kivex">
    <img src="https://raw.githubusercontent.com/MotionMind2007/Kivex/main/assets/kivex-logo.png" alt="Kivex Logo" width="150"/>
  </a>
</p>

<p align="center">
  <strong>kivex_flutter</strong><br>
  The official Flutter implementation of the Kivex (Kinetic Vector Exchange) Icon library.
</p>

<div align="center">

  [![pub package](https://img.shields.io/pub/v/kivex_flutter.svg?color=blue)](https://pub.dev/packages/kivex_flutter)
  [![likes](https://img.shields.io/pub/likes/kivex_flutter.svg)](https://pub.dev/packages/kivex_flutter/score)
  [![License](https://img.shields.io/badge/license-MIT-green)](https://github.com/motionmind2007/Kivex/blob/main/LICENSE)

</div>

<p align="center">
  <a href="https://github.com/motionmind2007/Kivex">Main Repo</a>
  ·
  <a href="https://github.com/motionmind2007/Kivex/blob/main/LICENSE">License</a>
</p>

# kivex_flutter

A lightweight, pixel-perfect, and highly customizable dynamic vector icon library for Flutter applications. Fully optimized for Mobile (Android, iOS), Desktop (Windows, macOS, Linux), and Web.

## Features

- **Multi-platform Support:** Works seamlessly across Android, iOS, Web, Windows, macOS, and Linux.
- **Fully Customizable:** Easily adjust `size`, `color`, and `strokeWidth` for every individual icon.
- **Tree-shaking Ready:** Only include the icons you actually use in your final application bundle.

## Installation

Add `kivex_flutter` to your `pubspec.yaml` file:

```yaml
dependencies:
  flutter:
    sdk: flutter
  kivex_flutter: ^1.3.0
```
Or run this command in your terminal:
```sh
flutter pub add kivex_flutter
```

## Usage
Every icon can be imported and used directly as a clean Flutter widget. They accept custom sizing, coloring, and stroke width parameters.

```dart
import 'package:flutter/material.dart';
import 'package:kivex_flutter/kivex_flutter.dart';

class MyWidget extends StatelessWidget {
  const MyWidget({super.key});

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceAround,
      children: const [
        // Default render
        Home(),

        // Styled with custom color, size, and stroke width
        Search(
          size: 32.0,
          color: Colors.blueAccent,
          strokeWidth: 2.5,
        ),
      ],
    );
  }
}
```

## Documentation
For full documentation, architecture design, and core guidelines, please visit our main repository at [Kivex System Root](https://github.com/motionmind2007/kivex).

## License
kivex_flutter is licensed under the MIT license. See [LICENSE](LICENSE).