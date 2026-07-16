// GENERATED CODE – DO NOT EDIT
import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

/// The [Check] icon.
class Check extends StatelessWidget {
  const Check({
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

  static const String _svgString = '''<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  fill="none"\r\n  stroke="currentColor"\r\n  stroke-width="2"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path d="m4 13 8.07 5.675a.5.5 0 0 0 .73-.174L20 5" />\r\n</svg>''';

  static String _applyStrokeWidth(String svg, double width) {
    if (svg.contains('stroke-width')) {
      return svg.replaceAll(RegExp(r'stroke-width="[^"]*"'), 'stroke-width="$width"');
    } else {
      return svg.replaceFirst(RegExp(r'<svg'), '<svg stroke-width="$width"');
    }
  }
}
