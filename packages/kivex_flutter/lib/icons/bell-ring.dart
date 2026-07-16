// GENERATED CODE – DO NOT EDIT
import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

/// The [BellRing] icon.
class BellRing extends StatelessWidget {
  const BellRing({
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

  static const String _svgString = '''<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  fill="none"\r\n  stroke="currentColor"\r\n  stroke-width="2"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path d="M5.778 9.588C5.778 5.95 8.564 3 12 3s6.222 2.95 6.222 6.588v3.817c0 .585.129 1.161.376 1.684l1.027 2.175c.247.523.375 1.1.375 1.684V19H4v-.052c0-.585.129-1.161.375-1.684l1.027-2.175c.247-.523.376-1.1.376-1.684z" />\r\n  <path d="M10 22h4" />\r\n  <path d="M2 8c.167-.833.5-3.5 3-6" />\r\n  <path d="M19 2c.833.833 2.6 3.2 3 6" />\r\n</svg>''';

  static String _applyStrokeWidth(String svg, double width) {
    if (svg.contains('stroke-width')) {
      return svg.replaceAll(RegExp(r'stroke-width="[^"]*"'), 'stroke-width="$width"');
    } else {
      return svg.replaceFirst(RegExp(r'<svg'), '<svg stroke-width="$width"');
    }
  }
}
