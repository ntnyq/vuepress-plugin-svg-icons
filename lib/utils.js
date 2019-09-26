const { basename } = require('path')
const svgMixer = require('svg-mixer')

/**
 * Generate svg symbol's id attribute
 */
const generateSymbolId = (filePath, iconIdPrefix) => iconIdPrefix + basename(filePath, '.svg')

/**
 * Generate svg sprite data config
 */
const spriteConfig = {
  usages: false,
  spacing: 0,
  attrs: { 'arial-hidden': 'true' },
}

/**
 * Generate Svg Sprite data
 */
exports.genSvgSprites = async (svgIconsPath, iconIdPrefix) => {
  const result = await svgMixer(`${svgIconsPath}/*.svg`, {
    generateSymbolId: filePath => generateSymbolId(filePath, iconIdPrefix),
    spriteConfig,
  })

  return result.content
}
