import { parseSync } from 'svgson';
import path from 'path';
import fs from "fs-extra";
import fg from "fast-glob"
import { fileURLToPath } from 'url';
import { createParentNodeNorma } from './IconTemplate.js';

const SVG_NS = "http://www.w3.org/2000/svg";
//
export async function writeFileIfChanged(filePath, newContent, force = false) {
    const exists = await fs.pathExists(filePath);
    if (!exists) {
        await fs.writeFile(filePath, newContent, "utf8");
        return true;
    }
    const currentContent = await fs.readFile(filePath, "utf8");
    if (force || newContent !== currentContent) {
        await fs.writeFile(filePath, newContent, "utf8");
        return true;
    }
    return false;
}
//
function camelCase(key) {
    return key.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
}
//
function serializeProps(props) {
    let result = "__namespace: SVG_NS,\n";
    for (let [key, value] of Object.entries(props)) {
        key = camelCase(key);
        result += `${key}: ${JSON.stringify(value)},`;
    }
    return result;
}
//
function serializeNode(node) {
    const props = serializeProps(node.attributes);
    const children = node.children.length
        ? node.children.map(serializeNode).join(",\n")
        : "";
    return `
h("${node.name}", {
${props}
}, [${children}])
`;
}

//
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);
export async function generateIcons(options = {}) {
    const force = options.force ?? process.argv.includes("--force");
    const ICONSDIR = path.join(__dirname, "../../../icons");
    const OUTDIR = path.join(__dirname, "../src", "icons");
    await fs.ensureDir(OUTDIR);
    const svgFiles = await fg('**/*.svg', {
        cwd: ICONSDIR,
        absolute: true
    });
    const exports = [];
    for (const filePath of svgFiles) {
        const fileName = path.basename(filePath, '.svg');
        const componentName = fileName
            .replace(/[-_](.)/g, (_, c) => c.toUpperCase())
            .replace(/^./, c => c.toUpperCase());
        const svgContent = await fs.readFile(filePath, 'utf8');
        const { children } = parseSync(svgContent);
        const childNORMA = children
            .map(serializeNode)
            .join(",\n");
        const finalCode = createParentNodeNorma(componentName, childNORMA);
        const od = path.join(OUTDIR, `${fileName}.jsx`)
        const written = await writeFileIfChanged(od, finalCode, force);
        if (written) {console.log(`Generated or Updated ${fileName}.jsx`);} else {console.log(`Skipped ${fileName}.jsx (unchanged)`)}
        exports.push(`export { default as ${componentName} } from "./icons/${fileName}.jsx";`);
    }
    const indexPath = path.join(OUTDIR, "../index.js");
    await fs.ensureFile(indexPath);
    const indextC = exports.join('\n');
    const written = await writeFileIfChanged(indexPath, indextC, force);
    if (written) {console.log(`Generated or Updated ${indexPath}`);} else {console.log(`Skipped ${indexPath} (unchanged)`)}
}
generateIcons().catch((err) => {
    console.error('❌ Error:', err);
    process.exit(1);
});