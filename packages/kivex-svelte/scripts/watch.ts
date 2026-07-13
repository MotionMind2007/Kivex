import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import { generateIcons } from './build.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT_DIRECTORY = path.resolve(__dirname, '..');
const ICONS_DIRECTORY = path.join(ROOT_DIRECTORY, '../../icons');

export async function watch(options?: { force?: boolean }): Promise<void> {
  const force = options?.force ?? process.argv.includes('--force');

  await generateIcons({ force });

  const chokidar = await import('chokidar');

  console.log(`👁️  Watching ${ICONS_DIRECTORY} for changes...`);
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

      // Check if file exists and has content – silently skip if empty
      try {
        const stats = fs.statSync(filePath);
        if (stats.size === 0) {
          // Do nothing – completely silent
          return;
        }
      } catch {
        // File doesn't exist – silently skip
        return;
      }

      isRunning = true;
      console.log(`\n🔄 Change detected (${event}), regenerating...`);
      generateIcons({ force })
        .catch((err) => console.error('❌ Error during regeneration:', err))
        .finally(() => {
          isRunning = false;
          timeout = null;
        });
    }, 300);
  });

  process.on('SIGINT', () => {
    console.log('\n👋 Stopping watch...');
    watcher.close();
    process.exit(0);
  });
}

watch().catch((err) => {
  console.error('❌ Error:', err);
  process.exit(1);
});