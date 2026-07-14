import path from 'path';
import fg from 'fast-glob';
import fs from 'fs-extra';
import prettier from 'prettier';
import { fileURLToPath } from 'url';
import { generateIconCode } from './IconTemplate';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export async function writeFileIfChanged(filePath, newContent, force) {
    const exists = await fs.pathExists(filePath);
    if (!exists) {
        await fs.writeFile(filePath, newContent, 'utf8');
        return true;
    }
    const currentContent = await fs.readFile(filePath, 'utf8');
    if (force || newContent !== currentContent) {
        await fs.writeFile(filePath, newContent, 'utf8');
        return true;
    }
    return false;
}
function extractSvgChildren(componentCode) {
    const match = componentCode.match(/<svg[^>]*>([\s\S]*?)<\/svg>/);
    if (!match) {
        throw new Error('Could not find SVG element in generated code.');
    }
    return match[1].trim();
}
async function generateIcons(options) {
    const force = options?.force ?? process.argv.includes('--force');
    const ROOT_DIRECTORY = path.resolve(__dirname, '..');
    const ICONS_DIRECTORY = path.join(ROOT_DIRECTORY, "../../icons");
    const OUTPUT_DIRECTORY = path.join(ROOT_DIRECTORY, 'src', 'icons');
    await fs.ensureDir(OUTPUT_DIRECTORY);
    const svgFiles = await fg('**/*.svg', {
        cwd: ICONS_DIRECTORY,
        absolute: true
    });
    if (svgFiles.length === 0) {
        console.warn('No SVG files found in', ICONS_DIRECTORY);
        return;
    }
    const generatedComponents = [];
    const exportStatements = [];
    for (const filePath of svgFiles) {
        const svgContent = await fs.readFile(filePath, 'utf8');
        const fileName = path.basename(filePath, '.svg');
        const componentName = fileName
            .replace(/[-_](.)/g, (_, char) => char.toUpperCase())
            .replace(/^./, (char) => char.toUpperCase());
        const childrenNode = extractSvgChildren(svgContent);
        const finalCode = generateIconCode(childrenNode);
        const outputFile = path.join(OUTPUT_DIRECTORY, `${fileName}.vue`);
        const formattedCode = await prettier.format(finalCode, { parser: 'vue' });
        const written = await writeFileIfChanged(outputFile, formattedCode, force);
        if (written) {
            console.log(`Generated or updated ${fileName}.vue`);
        }
        else {
            console.log(`Skipped ${fileName}.vue (unchanged)`);
        }
        generatedComponents.push(fileName);
        exportStatements.push(`export { default as ${componentName} } from './icons/${fileName}.vue';`);
    }
    const mainIndexContent = exportStatements.join('\n');
    const mainIndexPath = path.join(ROOT_DIRECTORY, 'src', 'index.ts');
    const existingFiles = await fs.readdir(OUTPUT_DIRECTORY);
    for (const file of existingFiles) {
        if (file === 'index.ts')
            continue;
        if (!file.endsWith('.vue'))
            continue;
        const baseName = path.basename(file, '.vue');
        if (!generatedComponents.includes(baseName)) {
            const filePath = path.join(OUTPUT_DIRECTORY, file);
            await fs.remove(filePath);
            console.log(`🗑️ Removed orphaned ${file}`);
        }
    }
    const written = await writeFileIfChanged(mainIndexPath, mainIndexContent, force);
    if (written) {
        console.log(`Main entry updated at ${mainIndexPath}`);
    }
    else {
        console.log(`Skipped ${mainIndexPath} (unchanged)`);
    }
}
generateIcons().catch((err) => {
    console.error('❌ Error:', err);
    process.exit(1);
});
