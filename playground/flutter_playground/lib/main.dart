import 'package:flutter/material.dart';
import 'package:kivex_flutter/kivex_flutter.dart';

final Map<
  String,
  Widget Function({double size, Color? color, double strokeWidth})
>
kivexIcons = {
  'Alert': ({double size = 24, Color? color, double strokeWidth = 2}) =>
      Alert(size: size, color: color, strokeWidth: strokeWidth),
  'Angry': ({double size = 24, Color? color, double strokeWidth = 2}) =>
      Angry(size: size, color: color, strokeWidth: strokeWidth),
  'Annoyed': ({double size = 24, Color? color, double strokeWidth = 2}) =>
      Annoyed(size: size, color: color, strokeWidth: strokeWidth),
  'Chat': ({double size = 24, Color? color, double strokeWidth = 2}) =>
      Chat(size: size, color: color, strokeWidth: strokeWidth),
};

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    final iconEntries = kivexIcons.entries.toList();

    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        appBar: AppBar(
          title: Text('All Icons (${iconEntries.length}) for kivex_flutter'),
        ),
        body: Padding(
          padding: const EdgeInsets.all(10.0),

          child: GridView.builder(
            gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
              crossAxisCount: 4,
              crossAxisSpacing: 10,
              mainAxisSpacing: 10,
            ),
            itemCount: iconEntries.length,
            itemBuilder: (context, index) {
              final name = iconEntries[index].key;
              final iconBuilder = iconEntries[index].value;

              return Container(
                decoration: BoxDecoration(
                  border: Border.all(color: Colors.black26),
                  borderRadius: BorderRadius.circular(8),
                ),
                padding: const EdgeInsets.all(8),
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    iconBuilder(size: 32, color: Colors.blueAccent),
                    const SizedBox(height: 8),
                    Text(
                      name,
                      style: const TextStyle(
                        fontSize: 12,
                        fontWeight: FontWeight.bold,
                      ),
                      textAlign: TextAlign.center,
                    ),
                  ],
                ),
              );
            },
          ),
        ),
      ),
    );
  }
}
