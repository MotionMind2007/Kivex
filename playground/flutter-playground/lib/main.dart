import 'package:flutter/material.dart';
import 'package:kivex_flutter/kivex_flutter.dart';

void main() => runApp(const PlaygroundApp());

class PlaygroundApp extends StatelessWidget {
  const PlaygroundApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Kivex Icons Playground',
      theme: ThemeData(
        useMaterial3: true,
        brightness: Brightness.dark,
        scaffoldBackgroundColor: const Color(0xFF1E1E2E),
      ),
      home: const PlaygroundHome(),
    );
  }
}

class PlaygroundHome extends StatelessWidget {
  const PlaygroundHome({super.key});

  // List with the full constructor signature (supports color, size, strokeWidth)
  final List<Widget Function({double size, Color? color, double strokeWidth})>
      _iconBuilders = const [
    Alert.new,
    Angry.new,
    Annoyed.new,
    Home.new,
    Heart.new,
    Chat.new,
    Calendar.new,
    Bookmark.new,
    BellRing.new,
    BarChart.new,
    // add more as you generate them
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Flutter Playground for Kivex Icons'),
        backgroundColor: const Color(0xFF16162A),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16),
        child: GridView.builder(
          gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
            crossAxisCount: 4,
            childAspectRatio: 1,
            crossAxisSpacing: 16,
            mainAxisSpacing: 16,
          ),
          itemCount: _iconBuilders.length,
          itemBuilder: (context, index) {
            return Container(
              decoration: BoxDecoration(
                color: const Color(0xFF2D2D44), // subtle card background
                borderRadius: BorderRadius.circular(16),
              ),
              child: _iconBuilders[index](
                size: 32, // slightly larger
                color: Colors.white, // match the light theme
                strokeWidth: 2,
              ),
            );
          },
        ),
      ),
    );
  }
}
