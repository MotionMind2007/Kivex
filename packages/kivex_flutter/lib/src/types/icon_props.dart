import 'package:flutter/material.dart';

class IconProps {
  final double size;

  final Color? color;

  final double strokeWidth;

  final String? semanticLabel;

  const IconProps({
    this.size = 24,
    this.color,
    this.strokeWidth = 2,
    this.semanticLabel,
  });

  IconProps copyWith({
    double? size,
    Color? color,
    double? strokeWidth,
    String? semanticLabel,
  }) {
    return IconProps(
      size: size ?? this.size,
      color: color ?? this.color,
      strokeWidth: strokeWidth ?? this.strokeWidth,
      semanticLabel: semanticLabel ?? this.semanticLabel,
    );
  }
}
