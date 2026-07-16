// GENERATED CODE – DO NOT EDIT
import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

/// The [PhoneIncoming] icon.
class PhoneIncoming extends StatelessWidget {
  const PhoneIncoming({
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

  static const String _svgString = '''<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  fill="none"\r\n  stroke="currentColor"\r\n  stroke-width="2"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path d="M7.362 2h-4.23a.966.966 0 0 0-.964.819c-1.062 7.066 2.651 17.334 18.73 19.175.587.067 1.102-.408 1.102-1.012v-5.153c0-.533-.398-.978-.918-1.027l-4.306-.4a1 1 0 0 0-.61.143l-2.154 1.32a.18.18 0 0 1-.18.007 18.8 18.8 0 0 1-6.593-5.62L6.95 9.86a.215.215 0 0 1 0-.254l1.219-1.66c.131-.179.202-.396.202-.62V3.032A1.02 1.02 0 0 0 7.362 2Z" />\r\n  <path d="M16 2v5a1 1 0 0 0 1 1h5" />\r\n  <path d="m17 7 5-5" />\r\n</svg>''';

  static String _applyStrokeWidth(String svg, double width) {
    if (svg.contains('stroke-width')) {
      return svg.replaceAll(RegExp(r'stroke-width="[^"]*"'), 'stroke-width="$width"');
    } else {
      return svg.replaceFirst(RegExp(r'<svg'), '<svg stroke-width="$width"');
    }
  }
}
