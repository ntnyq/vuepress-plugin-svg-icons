import path from 'path'
import svgMixer from 'svg-mixer'

/**
 * Generate svg symbol's id attribute
 *
 * @param filePath svg icon path
 * @param iconIdPrefix svg symbol's id prefix
 *
 * @returns svg symbol id
 */
const generateSymbolId = (filePath: string, iconIdPrefix: string) =>
  iconIdPrefix + path.basename(filePath, '.svg')

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
 * @param svgIconsPath svgs directory
 * @param iconIdPrefix svg symbol's id prefix
 *
 * @returns svg sprite data
 */
export const genSvgSprites = async (
  svgIconsPath: string,
  iconIdPrefix: string
) => {
  // @ts-expect-error svgmixer is not typed properly
  const result = await svgMixer(`${svgIconsPath}/*.svg`, {
    generateSymbolId: filePath => generateSymbolId(filePath, iconIdPrefix),
    spriteConfig,
  })

  return result.content
}
