const fs = require('fs')
const path = require('path')
const svgMixer = require('svg-mixer')

/**
 * Generate svg symbol's id attribute
 */
const generateSymbolId = filePath => `_vp-icon-${path.basename(filePath, '.svg')}`

/**
 * Generate svg sprite data config
 */
const spriteConfig = {
  filename: 'svg-icons.svg',
  usages: false,
  spacing: 0,
  attrs: {
    id: '__VUEPRESS_PLUGIN_SVG_ICONS__'
  }
}

/**
 * Generate Svg Sprite data
 */
exports.genSvgSprites = async ({ svgsDir }) => {
  const result = await svgMixer(`${svgsDir}/*.svg`, { generateSymbolId, spriteConfig })
  const filePath = path.resolve(__dirname, '.svgs-data.js')
  const fileContent = `export default \`${result.content}\`\n`

  fs.writeFileSync(filePath, fileContent)
}
