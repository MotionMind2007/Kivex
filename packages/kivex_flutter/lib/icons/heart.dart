// GENERATED CODE – DO NOT EDIT
import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

/// The [Heart] icon.
class Heart extends StatelessWidget {
  const Heart({
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

  static const String _svgString = '''<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  fill="none"\r\n  stroke="currentColor"\r\n  stroke-width="2"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <g clip-path="url(#a)">\r\n    <path d="m11.958 7.692-1.183-1.27C7.639 3.053 2 5.272 2 9.874c0 1.451.623 2.834 1.71 3.795l8.098 7.16a.29.29 0 0 0 .384 0l8.097-7.16A5.07 5.07 0 0 0 22 9.875c0-4.602-5.639-6.82-8.775-3.454l-1.183 1.27a.06.06 0 0 1-.084 0Z" />\r\n  </g>\r\n  <defs>\r\n    <clipPath id="a">\r\n      <rect width="24" height="24" />\r\n    </clipPath>\r\n  </defs>\r\n</svg>''';

  static String _applyStrokeWidth(String svg, double width) {
    if (svg.contains('stroke-width')) {
      return svg.replaceAll(RegExp(r'stroke-width="[^"]*"'), 'stroke-width="$width"');
    } else {
      return svg.replaceFirst(RegExp(r'<svg'), '<svg stroke-width="$width"');
    }
  }
}
