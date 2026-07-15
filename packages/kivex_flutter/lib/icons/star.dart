// GENERATED CODE – DO NOT EDIT
import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

/// The [Star] icon.
class Star extends StatelessWidget {
  const Star({
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

  static const String _svgString = '''<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  fill="none"\r\n  stroke="currentColor"\r\n  stroke-width="2"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path d="M11.952 2.146a.05.05 0 0 1 .096 0l2.41 7.42a.05.05 0 0 0 .048.035h7.802a.05.05 0 0 1 .03.09l-6.313 4.586a.05.05 0 0 0-.018.056l2.411 7.42a.05.05 0 0 1-.077.056l-6.312-4.586a.05.05 0 0 0-.058 0l-6.312 4.586a.05.05 0 0 1-.077-.056l2.41-7.42a.05.05 0 0 0-.017-.056L1.663 9.691a.05.05 0 0 1 .03-.09h7.801a.05.05 0 0 0 .048-.035z" />\r\n</svg>''';

  static String _applyStrokeWidth(String svg, double width) {
    if (svg.contains('stroke-width')) {
      return svg.replaceAll(RegExp(r'stroke-width="[^"]*"'), 'stroke-width="$width"');
    } else {
      return svg.replaceFirst(RegExp(r'<svg'), '<svg stroke-width="$width"');
    }
  }
}
