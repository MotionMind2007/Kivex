import path from 'path';
import { fileURLToPath } from 'url';
import fg from 'fast-glob';
import fs from 'fs-extra';
import { transform } from '@svgr/core';
import { generateIconCode } from './IconTemplate.ts';
import { writeFileIfChanged, extractSvgChildren } from './helpers.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Main generation function
export async function generateIcons(options?: { force?: boolean }): Promise<void> {
  console.log('🚀 Starting icon generation...');

  const force = options?.force ?? process.argv.includes('--force');

  const ROOT_DIRECTORY = path.resolve(__dirname, '..');
  const ICONS_DIRECTORY = path.join(ROOT_DIRECTORY, '../../icons');
  const OUTPUT_DIRECTORY = path.join(ROOT_DIRECTORY, 'src', 'icons');

  console.log(`📁 Looking for SVGs in: ${ICONS_DIRECTORY}`);
  await fs.ensureDir(OUTPUT_DIRECTORY);

  const svgFiles = await fg('**/*.svg', {
    cwd: ICONS_DIRECTORY,
    absolute: true,
  });

  if (svgFiles.length === 0) {
    console.warn('⚠️ No SVG files found in', ICONS_DIRECTORY);
    console.warn('   Create a folder named "icons" in the root of your project (kivex/icons) and add .svg files.');
    return;
  }

  console.log(`📄 Found ${svgFiles.length} SVG file(s).`);

  const generatedComponents: string[] = [];
  const exportStatements: string[] = [];

  for (const filePath of svgFiles) {
    const svgContent = await fs.readFile(filePath, 'utf8');
    const fileName = path.basename(filePath, '.svg');
    const componentName = fileName
      .replace(/[-_](.)/g, (_, char) => char.toUpperCase())
      .replace(/^./, (char) => char.toUpperCase());

    console.log(`🔄 Processing ${fileName}.svg → ${componentName}`);

    const svgrResult = await transform(
      svgContent,
      {
        typescript: true,
        jsxRuntime: 'classic',
        exportType: 'default',
        plugins: ['@svgr/plugin-jsx'],
        expandProps: false,
        dimensions: false,
        svgProps: {},
      },
      { componentName }
    );

    // Extract children with dash-case attributes
    const childrenJsx = extractSvgChildren(svgrResult);
    const finalCode = generateIconCode(childrenJsx, componentName);

    const outputFile = path.join(OUTPUT_DIRECTORY, `${fileName}.tsx`);
    const written = await writeFileIfChanged(outputFile, finalCode, force);
    if (written) {
      console.log(`✅ Generated or updated ${fileName}.tsx`);
    } else {
      console.log(`⏭️ Skipped ${fileName}.tsx (unchanged)`);
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
    console.log(`📝 Main entry updated at ${mainIndexPath}`);
  } else {
    console.log(`⏭️ Skipped ${mainIndexPath} (unchanged)`);
  }

  console.log('✨ Done!');
}

// Always run when executed 
generateIcons().catch((err) => {
  console.error('❌ Error:', err);
  process.exit(1);
});