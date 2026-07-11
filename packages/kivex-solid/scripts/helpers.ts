import fs from 'fs-extra';

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

/**
 * Convert camelCase SVG attributes to dash-case.
 * Special handling for 'clipPath' to avoid breaking <clipPath> element.
 */
export function convertSvgAttributesToDash(jsx: string): string {
  const simpleMap: Record<string, string> = {
    strokeWidth: 'stroke-width',
    strokeLinecap: 'stroke-linecap',
    strokeLinejoin: 'stroke-linejoin',
    fillRule: 'fill-rule',
    clipRule: 'clip-rule',
    strokeOpacity: 'stroke-opacity',
    fillOpacity: 'fill-opacity',
    strokeDasharray: 'stroke-dasharray',
    strokeDashoffset: 'stroke-dashoffset',
  };
  let result = jsx;
  for (const [camel, dash] of Object.entries(simpleMap)) {
    const regex = new RegExp(`\\b${camel}\\b`, 'g');
    result = result.replace(regex, dash);
  }
  // clipPath: only when it's an attribute, not an element
  result = result.replace(/clipPath(?=\s*[={])/g, 'clip-path');
  return result;
}

/**
 * Remove presentation attributes (stroke, fill, stroke-width, etc.)
 * from SVG elements so they inherit from the parent <svg>.
 */
export function stripChildAttributes(jsx: string): string {
  const attrs = [
    'stroke',
    'fill',
    'stroke-width',
    'stroke-linecap',
    'stroke-linejoin',
    'stroke-opacity',
    'fill-opacity',
    'stroke-dasharray',
    'stroke-dashoffset',
  ];
  let result = jsx;
  for (const attr of attrs) {
    // Remove quoted attribute: attr="value" or attr='value'
    const regexQuoted = new RegExp(`\\s*${attr}\\s*=\\s*(["'])(?:(?!\\1).)*\\1`, 'g');
    result = result.replace(regexQuoted, '');
    // Remove unquoted attribute: attr=value (until space or >)
    const regexUnquoted = new RegExp(`\\s*${attr}\\s*=\\s*[^\\s>]+`, 'g');
    result = result.replace(regexUnquoted, '');
  }
  // Clean up any leftover whitespace from removed attributes
  return result.replace(/\s{2,}/g, ' ').trim();
}

export function extractSvgChildren(componentCode: string): string {
  const match = componentCode.match(/<svg[^>]*>([\s\S]*?)<\/svg>/);
  if (!match) {
    throw new Error('Could not find SVG element in generated code.');
  }
  let rawChildren = match[1].trim();
  rawChildren = convertSvgAttributesToDash(rawChildren);
  rawChildren = stripChildAttributes(rawChildren);
  return rawChildren;
}