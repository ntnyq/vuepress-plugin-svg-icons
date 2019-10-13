const path = require('path')
const svgMixer = require('svg-mixer')

/**
 * Generate svg symbol's id attribute
 *
 * @param {string} filePath svg icon path
 * @param {string} iconIdPrefix svg symbol's id prefix
 *
 * @returns {string} svg symbol id
 */
const generateSymbolId = (filePath, iconIdPrefix) => iconIdPrefix + path.basename(filePath, '.svg')

/**
 * Config to generate svg sprite data
 */
const spriteConfig = {
  usages: false,
  spacing: 0,
  attrs: { 'arial-hidden': 'true' },
}

/**
 * Generate svg sprite data
 *
 * @param {string} svgIconsPath svgs directory
 * @param {string} iconIdPrefix svg symbol's id prefix
 *
 * @returns {string} svg sprite data
 */
exports.genSvgSprites = async (svgIconsPath, iconIdPrefix) => {
  const result = await svgMixer(`${svgIconsPath}/*.svg`, {
    generateSymbolId: filePath => generateSymbolId(filePath, iconIdPrefix),
    spriteConfig,
  })

  return result.content
}
