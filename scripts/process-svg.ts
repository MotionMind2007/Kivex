import fs from 'fs-extra';
import path from 'path';
import glob from 'fast-glob';
import { optimize } from 'svgo';
import { parseSync, stringify } from 'svgson';
import * as prettier from 'prettier';

const ROOT_DIR = path.resolve(__dirname, "..");
const ICONS_DIR = path.join(ROOT_DIR, "icons");

// Define universal default attributes
const DEFAULT_ATTRS = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '24',
  height: '24',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round',
};

async function optimizeSvg(svgContent:string, filePath:string) {
    const result = optimize(svgContent, {
        path: filePath,
        plugins: [
            {
                name: 'preset-default',
                params: {
                    overrides: {
                        convertShapeToPath: false,
                        mergePaths: false,
                        cleanupNumericValues: { floatPrecision: 2 },
                        convertPathData: { floatPrecision: 2 },
                        convertTransform: { floatPrecision: 2 }
                    },
                },
            },
            {
                name: 'removeAttrs',
                params: {
                    attrs: '(fill|stroke.*)',
                },
            },
        ],
    });

    return result.data;
}


/**
 * Reset and inject normalized root attributes into <svg>
 */
function setSvgAttributes(svgContent: string): string {
    const parsedSvg = parseSync(svgContent)

    parsedSvg.attributes = {
        ...parsedSvg.attributes,
        ...DEFAULT_ATTRS,
        width: String(DEFAULT_ATTRS.width),
        height: String(DEFAULT_ATTRS.height),
        "stroke-width": String(DEFAULT_ATTRS['stroke-width']),
        fill: 'none',
        stroke: 'currentColor',
    }

    return stringify(parsedSvg);
}


/**
 * Main pipeline to process and overwrite source SVGs
 */
async function polishSourceSvgs() {
    try {
        const svgFiles = await glob('*.svg', { cwd: ICONS_DIR, absolute: true });

        if (svgFiles.length === 0) {
            console.log('⚠️ No SVG files found in the root icons directory.');
            return;
        }

        console.log(`🧼 Polishing ${svgFiles.length} source SVGs...`);

        for (const filePath of svgFiles) {
            const rawContent = await fs.readFile(filePath, 'utf-8');

            // Process pipeline: Optimize -> Set Root Attrs -> Format with Prettier
            const optimized = await optimizeSvg(rawContent, filePath);
            const withAttrs = setSvgAttributes(optimized);
            let formatted = await prettier.format(withAttrs, { parser: 'babel' });

            formatted = formatted.replace(/;/g, '').trim();

            await fs.writeFile(filePath, formatted, 'utf8');
            console.log(`✨ Overwritten & Polished: ${path.basename(filePath)}`);
        }

        console.log('🎉 All source SVGs are now officially standardized and clean!');
    } catch (e) {
        console.error('❌ Failed to process SVGs:', e);
        process.exit(1);
    }

}

polishSourceSvgs();