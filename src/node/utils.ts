import path from 'node:path'
import svgMixer from 'svg-mixer'

interface SvgSpritesOptions {
  /**
   * Svg symbol's id prefix
   */
  prefix: string
}

/**
 * Generate svg symbol's id attribute
 *
 * @param file - svg icon path
 * @param prefix - svg symbol's id prefix
 *
 * @returns svg symbol id
 */
function generateSymbolId(file: string, prefix: string) {
  return prefix + path.basename(file, '.svg')
}

/**
 * Generate svg sprite data
 *
 * @param path - svgs directory
 * @param options - generate svg sprite options
 *
 * @returns svg sprite data
 */
export async function getSVGIconsData(
  path: string,
  options: SvgSpritesOptions,
) {
  // @ts-expect-error svg-mixer is not typed properly
  const result = await svgMixer(`${path}/*.svg`, {
    generateSymbolId: path => generateSymbolId(path, options.prefix),
    spriteConfig: {
      filename: '',
      usages: false,
      spacing: 0,
      attrs: { 'arial-hidden': 'true' },
    },
  })

  return result.content
}
