// GENERATED CODE – DO NOT EDIT
import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

/// The [Settings] icon.
class Settings extends StatelessWidget {
  const Settings({
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

  static const String _svgString = '''<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  fill="none"\r\n  stroke="currentColor"\r\n  stroke-width="2"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path d="M12.8 22h-1.6a1 1 0 0 1-1-1v-1.82c0-1.586-1.757-2.541-3.088-1.679l-1.334.865a1 1 0 0 1-1.456-.428l-.945-2.1a1 1 0 0 1 .426-1.284l1.45-.806c1.372-.762 1.372-2.734 0-3.496l-1.45-.806a1 1 0 0 1-.426-1.284l.945-2.1a1 1 0 0 1 1.456-.428l1.334.865c1.33.862 3.088-.093 3.088-1.679V3a1 1 0 0 1 1-1h1.6a1 1 0 0 1 1 1v1.82c0 1.586 1.757 2.541 3.088 1.679l1.334-.865a1 1 0 0 1 1.456.428l.945 2.1a1 1 0 0 1-.427 1.284l-1.449.806c-1.372.762-1.372 2.734 0 3.496l1.45.806a1 1 0 0 1 .426 1.284l-.945 2.1a1 1 0 0 1-1.456.428l-1.334-.865c-1.33-.862-3.088.093-3.088 1.679V21a1 1 0 0 1-1 1Z" />\r\n  <circle cx="12" cy="12" r="3" />\r\n</svg>''';

  static String _applyStrokeWidth(String svg, double width) {
    if (svg.contains('stroke-width')) {
      return svg.replaceAll(RegExp(r'stroke-width="[^"]*"'), 'stroke-width="$width"');
    } else {
      return svg.replaceFirst(RegExp(r'<svg'), '<svg stroke-width="$width"');
    }
  }
}
