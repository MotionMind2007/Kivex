// GENERATED CODE – DO NOT EDIT
import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

/// The [MicOff] icon.
class MicOff extends StatelessWidget {
  const MicOff({
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

  static const String _svgString = '''<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  fill="none"\r\n  stroke="currentColor"\r\n  stroke-width="2"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path d="M9.17 4A3.001 3.001 0 0 1 15 5v5" />\r\n  <path d="M14 14.236A3 3 0 0 1 9 12V9" />\r\n  <path d="M18.839 13.5q.16-.726.161-1.5v-2" />\r\n  <path d="M5 10v2a7 7 0 0 0 7 7m4-1.255A6.97 6.97 0 0 1 12 19m0 0v3" />\r\n  <path d="m2 2 20 20" />\r\n</svg>''';

  static String _applyStrokeWidth(String svg, double width) {
    if (svg.contains('stroke-width')) {
      return svg.replaceAll(RegExp(r'stroke-width="[^"]*"'), 'stroke-width="$width"');
    } else {
      return svg.replaceFirst(RegExp(r'<svg'), '<svg stroke-width="$width"');
    }
  }
}
