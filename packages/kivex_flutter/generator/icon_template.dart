String generateIconCode(String componentName, String svgContent) {
  final escapedSvg = _escapeForDartString(svgContent);

  // Use triple double‑quotes for the outer template to avoid clashing with the inner triple single‑quotes used for the SVG string literal.
  return """
// GENERATED CODE – DO NOT EDIT
import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

/// The [$componentName] icon.
class $componentName extends StatelessWidget {
  const $componentName({
    super.key,
    this.size = 24,
    this.color,
    this.strokeWidth = 2,
  });

  final double size;
  final Color? color;
  final double strokeWidth;

  @override
  Widget build(BuildContext context) {
    final svgWithStroke = _applyStrokeWidth(_svgString, strokeWidth);
    return SvgPicture.string(
      svgWithStroke,
      width: size,
      height: size,
      colorFilter: color != null ? ColorFilter.mode(color!, BlendMode.srcIn) : null,
    );
  }

  static const String _svgString = '''$escapedSvg''';

  static String _applyStrokeWidth(String svg, double width) {
    if (svg.contains('stroke-width')) {
      return svg.replaceAll(RegExp(r'stroke-width="[^"]*"'), 'stroke-width="\$width"');
    } else {
      return svg.replaceFirst(RegExp(r'<svg'), '<svg stroke-width="\$width"');
    }
  }
}
""";
}

/// Escapes a string for embedding inside a single‑quoted multi‑line Dart string.
/// Handles \, $, ', and also ensures that three consecutive quotes don't break the literal.
String _escapeForDartString(String input) {
  // Escape backslashes and dollar signs
  var result = input.replaceAll(r'\', r'\\').replaceAll(r'$', r'\$');

  // Escape every single quote – this turns ''' into \'\'\' which is safe
  result = result.replaceAll(r"'", r"\'");

  // Escape newlines, carriage returns, tabs
  result = result
      .replaceAll('\n', r'\n')
      .replaceAll('\r', r'\r')
      .replaceAll('\t', r'\t');

  return result;
}
