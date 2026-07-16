// GENERATED CODE – DO NOT EDIT
import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

/// The [DraftBook] icon.
class DraftBook extends StatelessWidget {
  const DraftBook({
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

  static const String _svgString = '''<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  fill="none"\r\n  stroke="currentColor"\r\n  stroke-width="2"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path d="M4 18v2a2 2 0 0 0 2 2h13.857M4 18h15.857M4 18V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v13.857a.143.143 0 0 1-.143.143M20 22h-.143m0-4-.576.538a2 2 0 0 0 0 2.924l.576.538" />\r\n  <path d="M9.6 14H12m2.4 0H12m0 0V6m0 0H8.5a.5.5 0 0 0-.5.5v1.278M12 6h3.5a.5.5 0 0 1 .5.5v1.278" />\r\n</svg>''';

  static String _applyStrokeWidth(String svg, double width) {
    if (svg.contains('stroke-width')) {
      return svg.replaceAll(RegExp(r'stroke-width="[^"]*"'), 'stroke-width="$width"');
    } else {
      return svg.replaceFirst(RegExp(r'<svg'), '<svg stroke-width="$width"');
    }
  }
}
