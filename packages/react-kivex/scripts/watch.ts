import path from 'path';
import { generateIcons } from './build';

const ICONS_DIRECTORY = path.join(path.resolve(__dirname, '..'), '../../icons');

async function watch() {
  const chokidar = await import('chokidar');

  // Initial run
  await generateIcons();

  console.log(`Watching ${ICONS_DIRECTORY} for changes...`);
  console.log('   Press Ctrl+C to stop.');

  let timeout: NodeJS.Timeout | null = null;
  let isRunning = false;

  const watcher = chokidar.watch(ICONS_DIRECTORY, {
    persistent: true,
    ignoreInitial: true,
    depth: 10,
  });

  watcher.on('all', (event, filePath) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      if (isRunning) return;
      isRunning = true;
      console.log(`\n🔄 Change detected (${event}), regenerating...`);
      generateIcons()
        .catch((err) => console.error('Error during regeneration:', err))
        .finally(() => {
          isRunning = false;
          timeout = null;
        });
    }, 200);
  });

  process.on('SIGINT', () => {
    console.log('\n👋 Stopping watch...');
    watcher.close();
    process.exit(0);
  });
}

if (require.main === module) {
  watch().catch((err) => {
    console.error('Error:', err);
    process.exit(1);
  });
}