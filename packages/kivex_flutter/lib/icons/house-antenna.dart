// GENERATED CODE – DO NOT EDIT
import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

/// The [HouseAntenna] icon.
class HouseAntenna extends StatelessWidget {
  const HouseAntenna({
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

  static const String _svgString = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\r\n  <!-- House body -->\r\n  <rect x="4" y="10" width="16" height="12" />\r\n  <!-- Roof (triangle) -->\r\n  <polygon points="4,10 12,3 20,10" />\r\n  <!-- Antenna mast -->\r\n  <line x1="12" y1="3" x2="12" y2="0.5" />\r\n  <!-- Antenna tip -->\r\n  <circle cx="12" cy="0.5" r="1.5" fill="currentColor" stroke="none" />\r\n  <!-- Door -->\r\n  <rect x="9" y="14" width="6" height="8" />\r\n  <!-- Door knob -->\r\n  <circle cx="13.5" cy="18" r="0.8" fill="currentColor" stroke="none" />\r\n  <!-- Window (optional) -->\r\n  <rect x="6" y="12" width="4" height="4" />\r\n  <rect x="14" y="12" width="4" height="4" />\r\n</svg>''';

  static String _applyStrokeWidth(String svg, double width) {
    if (svg.contains('stroke-width')) {
      return svg.replaceAll(RegExp(r'stroke-width="[^"]*"'), 'stroke-width="$width"');
    } else {
      return svg.replaceFirst(RegExp(r'<svg'), '<svg stroke-width="$width"');
    }
  }
}
