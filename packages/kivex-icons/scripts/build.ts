//
import path from 'path';
import fg from 'fast-glob';
import fs from 'fs-extra';
import { generateIconCode } from './IconTemplate';
import { generateIndexCode } from './generateIndex';

import { optimize } from "svgo";

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
    if (force || newContent !== currentContent) {
        await fs.writeFile(filePath, newContent, 'utf8');
        return true;
    }
    return false;
}

function extractSvgChildrens( svgConten: string, filePath: string ): string[] {
    const childrenString: string[] = [];

    optimize(svgConten, {
        path: filePath,
        plugins: [
            'preset-default',
            'removeDimensions',
            'collapseGroups',
            'convertShapeToPath',
            {
                name: 'extract-node-to-array',
                fn: () => {
                    return {
                        element: {
                            enter: (node) => {
                                if (node.name !== 'svg') {
                                    const attributes = Object.entries(node.attributes)
                                        .map(([key, val]) => `${key}="${val}"`)
                                        .join(' ');
                                    
                                    const hasChildren = node.children && node.children.length > 0;
                                    const attrPrefix = attributes ? ` ${attributes}` : '';
                                    const tagString = hasChildren
                                        ? `<${node.name}${attrPrefix}>`
                                        : `<${node.name}${attrPrefix} />`;
                                    childrenString.push(tagString);
                                }
                            },
                            exit: (node) => {
                                if(node.name !== 'svg' && node.children && node.children.length > 0) {
                                    childrenString.push(`</${node.name}>`)
                                }
                            }
                        }
                    }
                }
            }
        ]
    });

    return childrenString;
}
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
        console.warn("No svg files found in", ICONS_DIRECTORY);
    };

    const generatedComponents: string[] = [];
    const exportStatements: string[] = [];

    for (const filePath of svgFiles) {
        const svgContent = await fs.readFile(filePath, 'utf8');
        const fileName = path.basename(filePath, '.svg');
        const componentName = fileName
            .replace(/[-_](.)/g, (_, char) => char.toUpperCase())
            .replace(/^./, (char) => char.toUpperCase())

        const childArray = extractSvgChildrens(svgContent, filePath);
        const finalCode = generateIconCode(componentName, childArray)

        const outputFile = path.join(OUTPUT_DIRECTORY, `${fileName}.tsx`)
        const written = await writeFileIfChanged(outputFile, finalCode, force);

        if (written) {
            console.log(`Generated or Updated ${fileName}.tsx`);
        } else {
            console.log(`Skipped ${fileName}.tsx (unchanged)`)
        }

        generatedComponents.push(fileName);
        exportStatements.push(`export { ${componentName} } from './${fileName}';`);
    }

    // remove orphaned component files
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

    // update src/icons/index.ts
    const mainIndexContent =
        exportStatements.join('\n') +
        '\n';

    const mainIndexPath = path.join(ROOT_DIRECTORY, 'src', "icons", 'index.ts');
    const writeIndex = await writeFileIfChanged(mainIndexPath, mainIndexContent, force);
    if (writeIndex) {
        console.log(`Main entry updated at ${mainIndexPath}`);
    } else {
        console.log(`Skipped ${mainIndexPath} (unchanged)`);
    }

    //generate index.ts
    generateIndexCode(force);
}

// CLI entry point
generateIcons().catch((err) => {
    console.error('❌ Error:', err);
    process.exit(1);
});