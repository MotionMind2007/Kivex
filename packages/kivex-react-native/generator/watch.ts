import path from 'path';
import { fileURLToPath } from 'url';
import { generateIcons } from './build';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Correct path: root icons folder (three levels up from generator)
const ICONS_DIRECTORY = path.join(__dirname, '../../../icons');

async function watch() {
  let chokidar;
  try {
    chokidar = await import('chokidar');
    console.log('✅ chokidar loaded successfully');
  } catch (err) {
    console.error('❌ Failed to load chokidar. Please install it:', err);
    process.exit(1);
  }

  // Initial generation
  await generateIcons();

  console.log(`👀 Watching ${ICONS_DIRECTORY} for changes...`);
  console.log('   Press Ctrl+C to stop.');

  let timeout: NodeJS.Timeout | null = null;
  let isRunning = false;

  const watcher = chokidar.watch(ICONS_DIRECTORY, {
    persistent: true,
    ignoreInitial: true,
    depth: 10,
  });

  watcher.on('all', (event, filePath) => {
    if (!filePath.endsWith('.svg')) return;

    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      if (isRunning) return;
      isRunning = true;
      console.log(`\n🔄 Change detected (${event}), regenerating...`);
      generateIcons()
        .catch((err) => console.error('❌ Error during regeneration:', err))
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

  watcher.on('ready', () => {
    console.log('✅ Watcher is ready and monitoring for changes.');
  });
}

// Only run when executed directly
if (process.argv[1] === __filename) {
  watch().catch((err) => {
    console.error('❌ Error in watch:', err);
    process.exit(1);
  });
}