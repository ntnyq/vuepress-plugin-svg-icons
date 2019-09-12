const { basename } = require('path')
const svgMixer = require('svg-mixer')

const DEFAULT_COMPONENT_NAME = 'VpIcon'
const DEFAULT_ICON_ID_PREFIX = 'vp_icon_'
const DEFAULT_ICON_CLASS_PREFIX = 'vp-icon-'
const DEFAULT_ICON_COMMON_CLASS = 'vp-icon'

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

exports.defaultComponentName = DEFAULT_COMPONENT_NAME
exports.defaultIconIdPrefix = DEFAULT_ICON_ID_PREFIX
exports.defaultIconClassPrefix = DEFAULT_ICON_CLASS_PREFIX
exports.defaultIconCommonClass = DEFAULT_ICON_COMMON_CLASS
