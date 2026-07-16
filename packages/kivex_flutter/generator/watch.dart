import 'dart:async';
import 'dart:io';
import 'package:path/path.dart' as p;

void main(List<String> args) async {
  final force = args.contains('--force');

  final scriptDir = p.dirname(p.fromUri(Platform.script));
  final rootDir = p.dirname(scriptDir);
  final iconsDir = p.join(rootDir, '..', '..', 'icons');

  // Initial run
  await _runGenerator(force);
  print('👀 Watching $iconsDir for changes...');
  print('   Press Ctrl+C to stop.');

  Timer? debounce;
  bool isRunning = false;

  final watcher = Directory(iconsDir).watch(recursive: true);

  await for (final event in watcher) {
    // Only respond to file events (modify, create, delete)
    if (event.type != FileSystemEvent.modify &&
        event.type != FileSystemEvent.create &&
        event.type != FileSystemEvent.delete) {
      continue;
    }

    // Check if the affected path is an SVG file
    final eventPath = event.path;
    if (!eventPath.endsWith('.svg')) continue;

    debounce?.cancel();
    debounce = Timer(const Duration(milliseconds: 200), () async {
      if (isRunning) return;
      isRunning = true;
      print('\n🔄 Change detected (${event.type}), regenerating...');
      try {
        await _runGenerator(force);
      } catch (e) {
        print('❌ Error during regeneration: $e');
      } finally {
        isRunning = false;
        debounce = null;
      }
    });
  }
}

Future<void> _runGenerator(bool force) async {
  final args = ['run', 'generator/build.dart'];
  if (force) args.add('--force');

  final result = await Process.run('dart', args);
  if (result.exitCode != 0) {
    stderr.write(result.stderr);
    throw Exception('Generator failed with exit code ${result.exitCode}');
  } else {
    stdout.write(result.stdout);
  }
}
