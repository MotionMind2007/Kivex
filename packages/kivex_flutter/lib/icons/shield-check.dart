// GENERATED CODE – DO NOT EDIT
import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

/// The [ShieldCheck] icon.
class ShieldCheck extends StatelessWidget {
  const ShieldCheck({
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

  static const String _svgString = '''<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  fill="none"\r\n  stroke="currentColor"\r\n  stroke-width="2"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path d="M4 5.256a.23.23 0 0 1 .227-.229c2.45-.018 4.83-.82 6.791-2.29l.808-.606a.29.29 0 0 1 .348 0l.808.605a11.45 11.45 0 0 0 6.79 2.291.23.23 0 0 1 .228.229v6.712a10.29 10.29 0 0 1-7.977 10.027.1.1 0 0 1-.046 0A10.29 10.29 0 0 1 4 11.968V5.256Z" />\r\n  <path d="m9 12 1.741 1.625a.5.5 0 0 0 .737-.06L15 9" />\r\n</svg>''';

  static String _applyStrokeWidth(String svg, double width) {
    if (svg.contains('stroke-width')) {
      return svg.replaceAll(RegExp(r'stroke-width="[^"]*"'), 'stroke-width="$width"');
    } else {
      return svg.replaceFirst(RegExp(r'<svg'), '<svg stroke-width="$width"');
    }
  }
}
