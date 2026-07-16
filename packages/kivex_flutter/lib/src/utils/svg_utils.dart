class SvgUtils {
  const SvgUtils._();

  static String applyStrokeWidth(
    String svg,
    double strokeWidth,
  ) {
    return svg.replaceAllMapped(
      RegExp(r'stroke-width="[^"]*"'),
      (_) => 'stroke-width="$strokeWidth"',
    );
  }
}
