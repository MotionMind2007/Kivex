import path from 'path';
import fg from 'fast-glob';
import fs from 'fs-extra';
import { fileURLToPath } from 'url';
import { transform } from '@svgr/core';
import { generateIconCode } from './IconTemplate';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// shared utilities

export async function writeFileIfChanged(
  filePath: string,
  newContent: string,
  force: boolean
): Promise<boolean> {
  const exists = await fs.pathExists(filePath);
  if (!exists) {
    await fs.writeFile(filePath, newContent, 'utf8');
    return true;
  }
  const currentContent = await fs.readFile(filePath, 'utf8');
  if (force || currentContent !== newContent) {
    await fs.writeFile(filePath, newContent, 'utf8');
    return true;
  }
  return false;
}

function extractSvgChildren(componentCode: string): string {
  const match = componentCode.match(/<svg[^>]*>([\s\S]*?)<\/svg>/);
  if (!match) {
    throw new Error('Could not find SVG element in generated code.');
  }
  return match[1].trim();
}

// main generation function (exported) 

export async function generateIcons(options?: { force?: boolean }): Promise<void> {
  const force = options?.force ?? process.argv.includes('--force');

  const ROOT_DIRECTORY = path.resolve(__dirname, '..');
  const ICONS_DIRECTORY = path.join(ROOT_DIRECTORY, '../../icons');
  const OUTPUT_DIRECTORY = path.join(ROOT_DIRECTORY, 'src', 'icons');

  await fs.ensureDir(OUTPUT_DIRECTORY);

  const svgFiles = await fg('**/*.svg', {
    cwd: ICONS_DIRECTORY,
    absolute: true,
  });

  if (svgFiles.length === 0) {
    console.warn('No SVG files found in', ICONS_DIRECTORY);
    return;
  }

  const generatedComponents: string[] = [];
  const exportStatements: string[] = [];

  for (const filePath of svgFiles) {
    const svgContent = await fs.readFile(filePath, 'utf8');
    const fileName = path.basename(filePath, '.svg');
    const componentName = fileName
      .replace(/[-_](.)/g, (_, char) => char.toUpperCase())
      .replace(/^./, (char) => char.toUpperCase());

    const svgrResult = await transform(
      svgContent,
      {
        typescript: true,
        jsxRuntime: 'automatic',
        exportType: 'default',
        plugins: ['@svgr/plugin-jsx'],
        expandProps: false,
        dimensions: false,
        svgProps: {},
      },
      { componentName }
    );

    const childrenJsx = extractSvgChildren(svgrResult);
    const finalCode = generateIconCode(childrenJsx, componentName);

    const outputFile = path.join(OUTPUT_DIRECTORY, `${fileName}.tsx`);
    const written = await writeFileIfChanged(outputFile, finalCode, force);
    if (written) {
      console.log(`Generated or updated ${fileName}.tsx`);
    } else {
      console.log(`Skipped ${fileName}.tsx (unchanged)`);
    }

    generatedComponents.push(fileName);
    exportStatements.push(`export { ${componentName} } from './icons/${fileName}';`);
  }

  // Remove orphaned component files
  const existingFiles = await fs.readdir(OUTPUT_DIRECTORY);
  for (const file of existingFiles) {
    if (file === 'index.ts') continue;
    if (!file.endsWith('.tsx')) continue;
    const baseName = path.basename(file, '.tsx');
    if (!generatedComponents.includes(baseName)) {
      const filePath = path.join(OUTPUT_DIRECTORY, file);
      await fs.remove(filePath);
      console.log(`🗑️ Removed orphaned ${file}`);
    }
  }

  // Update src/index.ts
  const mainIndexContent =
    `export type { IconProps } from './types/IconProps';\n` +
    exportStatements.join('\n') +
    '\n';

  const mainIndexPath = path.join(ROOT_DIRECTORY, 'src', 'index.ts');
  const written = await writeFileIfChanged(mainIndexPath, mainIndexContent, force);
  if (written) {
    console.log(`Main entry updated at ${mainIndexPath}`);
  } else {
    console.log(`Skipped ${mainIndexPath} (unchanged)`);
  }
}

// CLI entry point when run directly 

// Check if this module is being run directly (ESM style)
//const isMainModule = import.meta.url === new URL(process.argv[1], import.meta.url).href;

  generateIcons().catch((err) => {
    console.error('❌ Error:', err);
    process.exit(1);
  });
