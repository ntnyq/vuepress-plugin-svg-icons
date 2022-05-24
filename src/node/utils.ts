import path from 'path'
import svgMixer from 'svg-mixer'

interface SvgSpritesOptions {
  prefix?: string
}

/**
 * Generate svg symbol's id attribute
 *
 * @param file svg icon path
 * @param prefix svg symbol's id prefix
 *
 * @returns svg symbol id
 */
const generateSymbolId = (file: string, prefix: string) =>
  prefix + path.basename(file, `.svg`)

/**
 * Config to generate svg sprite data
 */
const spriteConfig = {
  filename: ``,
  usages: false,
  spacing: 0,
  attrs: { 'arial-hidden': `true` },
}

/**
 * Generate svg sprite data
 *
 * @param path svgs directory
 * @param options generate svg sprite options
 *
 * @returns svg sprite data
 */
export async function genSvgSprites (
  path: string,
  options: SvgSpritesOptions = {},
) {
  // @ts-expect-error svgmixer is not typed properly
  const result = await svgMixer(`${path}/*.svg`, {
    generateSymbolId: path => generateSymbolId(path, options.prefix!),
    spriteConfig,
  })

  return result.content
}
