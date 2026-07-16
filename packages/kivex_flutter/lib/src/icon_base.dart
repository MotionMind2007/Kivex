import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';

import 'package:kivex_flutter/src/types/icon_props.dart';
import 'package:kivex_flutter/src/utils/svg_utils.dart';

class IconBase extends StatelessWidget {
  final String svg;

  final IconProps props;

  const IconBase({
    super.key,
    required this.svg,
    required this.props,
  });

  @override
  Widget build(BuildContext context) {
    final processedSvg = SvgUtils.applyStrokeWidth(
      svg,
      props.strokeWidth,
    );

    return SvgPicture.string(
      processedSvg,
      width: props.size,
      height: props.size,
      semanticsLabel: props.semanticLabel,
      colorFilter: props.color != null
          ? ColorFilter.mode(
              props.color!,
              BlendMode.srcIn,
            )
          : null,
    );
  }
}
