import path from 'path';
import { fileURLToPath } from 'url';
import { writeFileIfChanged } from './build';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function generateIndexCode(force: boolean): void {
    const indexPath = path.join(__dirname, "../src/index.ts");
    if (!indexPath) {console.log(`src/index.ts file not found at ${indexPath}`); return};
    const content = `export { buildKivexIcon } from './core/buildKivexIcon';\n` +
        `export { replaceKivexIcons } from './core/replaceKivexIcons';\n` +
        `export { getKivexIconString } from './core/getKivexIconString';\n` +
        '\n' + `// icons` + '\n' + `export * from './icons/index';` + '\n';

    writeFileIfChanged(indexPath, content, force);
    console.log('✨ Global src/index.ts successfully auto-generated or skipped!');
    
}