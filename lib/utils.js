const { basename } = require('path')
const svgMixer = require('svg-mixer')

/**
 * Generate svg symbol's id attribute
 */
const generateSymbolId = filePath => `vp-icon-${basename(filePath, '.svg')}`

/**
 * Generate svg sprite data config
 */
const spriteConfig = {
  usages: false,
  spacing: 0,
  attrs: {
    'arial-hidden': 'true',
    style: 'position: absolute; width: 0; height: 0; overflow: hidden;'
  }
}

/**
 * Generate Svg Sprite data
 */
exports.genSvgSprites = async (svgIconsPath) => {
  const result = await svgMixer(`${svgIconsPath}/*.svg`, { generateSymbolId, spriteConfig })

  return result.content
}
