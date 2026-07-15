// GENERATED CODE – DO NOT EDIT
import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

/// The [PenLine] icon.
class PenLine extends StatelessWidget {
  const PenLine({
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

  static const String _svgString = '''<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  fill="none"\r\n  stroke="currentColor"\r\n  stroke-width="2"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <g clip-path="url(#a)">\r\n    <path d="M8.214 20.064 21.116 6.412a2.737 2.737 0 1 0-3.979-3.76L4.19 16.351q-.114.123-.184.275l-2.277 5.03a.5.5 0 0 0 .628.675l5.477-2.016a1 1 0 0 0 .381-.252Z" />\r\n    <path d="M12 21h9" />\r\n  </g>\r\n  <defs>\r\n    <clipPath id="a">\r\n      <rect width="24" height="24" />\r\n    </clipPath>\r\n  </defs>\r\n</svg>''';

  static String _applyStrokeWidth(String svg, double width) {
    if (svg.contains('stroke-width')) {
      return svg.replaceAll(RegExp(r'stroke-width="[^"]*"'), 'stroke-width="$width"');
    } else {
      return svg.replaceFirst(RegExp(r'<svg'), '<svg stroke-width="$width"');
    }
  }
}
