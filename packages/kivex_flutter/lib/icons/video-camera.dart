// GENERATED CODE – DO NOT EDIT
import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

/// The [VideoCamera] icon.
class VideoCamera extends StatelessWidget {
  const VideoCamera({
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

  static const String _svgString = '''<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  fill="none"\r\n  stroke="currentColor"\r\n  stroke-width="2"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path d="M14.214 7H4.786C4.352 7 4 7.336 4 7.75v7.5c0 .414.352.75.786.75h9.428c.434 0 .786-.336.786-.75v-7.5c0-.414-.352-.75-.786-.75Z" />\r\n  <path d="m15 12.105 3.704 1.792c.554.268 1.296-.02 1.296-.503V9.606c0-.483-.742-.771-1.296-.503L15 10.895" />\r\n  <path d="m7 21 2.143-3.57a1 1 0 0 1 1.714 0L13 21" />\r\n  <circle cx="6.5" cy="3.5" r="1.5" />\r\n  <circle cx="11.5" cy="3.5" r="1.5" />\r\n</svg>''';

  static String _applyStrokeWidth(String svg, double width) {
    if (svg.contains('stroke-width')) {
      return svg.replaceAll(RegExp(r'stroke-width="[^"]*"'), 'stroke-width="$width"');
    } else {
      return svg.replaceFirst(RegExp(r'<svg'), '<svg stroke-width="$width"');
    }
  }
}
