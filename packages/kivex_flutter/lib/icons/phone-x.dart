// GENERATED CODE – DO NOT EDIT
import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

/// The [PhoneX] icon.
class PhoneX extends StatelessWidget {
  const PhoneX({
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

  static const String _svgString = '''<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  fill="none"\r\n  stroke="currentColor"\r\n  stroke-width="2"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path d="M7.5 2.5H3.308a.95.95 0 0 0-.954.794c-1.052 6.854 2.627 16.813 18.554 18.598A.987.987 0 0 0 22 20.911v-4.998a1 1 0 0 0-.91-.996l-4.265-.387a1 1 0 0 0-.605.138l-2.133 1.28a.19.19 0 0 1-.178.006 18.5 18.5 0 0 1-6.531-5.45l-.286-.38a.205.205 0 0 1 0-.247L8.3 8.267a1 1 0 0 0 .2-.6V3.5a1 1 0 0 0-1-1Z" />\r\n  <path d="m15 3 6 6" />\r\n  <path d="m21 3-6 6" />\r\n</svg>''';

  static String _applyStrokeWidth(String svg, double width) {
    if (svg.contains('stroke-width')) {
      return svg.replaceAll(RegExp(r'stroke-width="[^"]*"'), 'stroke-width="$width"');
    } else {
      return svg.replaceFirst(RegExp(r'<svg'), '<svg stroke-width="$width"');
    }
  }
}
