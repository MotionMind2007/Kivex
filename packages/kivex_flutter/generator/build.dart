// generator/build.dart

import 'dart:io';
import 'package:path/path.dart' as p;
import 'icon_template.dart' show generateIconCode;

void main(List<String> args) async {
  final force = args.contains('--force');

  final rootDir = p.dirname(p.dirname(p.fromUri(Platform.script)));
  final iconsDir = p.join(rootDir, '..', '..', 'icons');
  final outputDir = p.join(rootDir, 'lib', 'icons');
  final mainEntry = p.join(rootDir, 'lib', 'kivex_flutter.dart');

  // Ensure the icons directory exists
  await Directory(iconsDir).create(recursive: true);
  await Directory(outputDir).create(recursive: true);

  // Find all SVG files
  final svgFiles = Directory(iconsDir)
      .listSync(recursive: true, followLinks: false)
      .whereType<File>()
      .where((f) => f.path.endsWith('.svg'))
      .toList();

  if (svgFiles.isEmpty) {
    print('No SVG files found in $iconsDir');
    print('Please place your .svg files in assets/icons/ and run again.');
    return;
  }

  final generatedNames = <String>[];
  final exportLines = <String>[];

  for (final file in svgFiles) {
    final fileName = p.basenameWithoutExtension(file.path);
    final componentName = _toPascalCase(fileName);
    final outputFile = p.join(outputDir, '$fileName.dart');

    final svgContent = await file.readAsString();
    final code = generateIconCode(componentName, svgContent);

    final written = await _writeIfChanged(outputFile, code, force);
    if (written) {
      print('Generated/updated $fileName.dart');
    } else {
      print('Skipped $fileName.dart (unchanged)');
    }

    generatedNames.add(fileName);
    exportLines.add("export 'icons/$fileName.dart';");
  }

  // Remove orphaned files
  final existing = Directory(outputDir).listSync().whereType<File>().toList();
  for (final file in existing) {
    final name = p.basename(file.path);
    if (name == 'index.dart') continue;
    if (!name.endsWith('.dart')) continue;
    final base = p.basenameWithoutExtension(name);
    if (!generatedNames.contains(base)) {
      await file.delete();
      print('🗑️ Removed orphaned $name');
    }
  }

  // Update main library entry
  final mainContent = '''
/// The Kivex Flutter package.
library kivex_flutter;

${exportLines.join('\n')}
''';

  final written = await _writeIfChanged(mainEntry, mainContent, force);
  if (written) {
    print('Main entry updated at $mainEntry');
  } else {
    print('Skipped main entry (unchanged)');
  }
}

String _toPascalCase(String input) {
  return input.split(RegExp(r'[-_]')).map((part) {
    if (part.isEmpty) return '';
    return part[0].toUpperCase() + part.substring(1);
  }).join();
}

Future<bool> _writeIfChanged(
    String filePath, String newContent, bool force) async {
  final file = File(filePath);
  if (!await file.exists()) {
    await file.writeAsString(newContent);
    return true;
  }
  final current = await file.readAsString();
  if (force || current != newContent) {
    await file.writeAsString(newContent);
    return true;
  }
  return false;
}
