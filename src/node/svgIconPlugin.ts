import path from 'path'
import fs from 'fs'
import { type Plugin } from '@vuepress/core'
import { genSvgSprites } from './utils'

export interface SvgIconPluginOptions {
  svgsDir?: string
  iconIdPrefix?: string
  componentName?: string
  defaultPropsOptions?: Record<string, any>
}

export const svgIconPlugin = ({
  svgsDir = `icons`,
  componentName = `VpIcon`,
  iconIdPrefix = `vp_icon_`,
  defaultPropsOptions = {},
}: SvgIconPluginOptions = {}): Plugin => ({
  name: `@goy/svg-icons`,

  clientAppEnhanceFiles: path.resolve(
    __dirname,
    `../client/clientAppEnhance.js`,
  ),

  clientAppRootComponentFiles: path.resolve(
    __dirname,
    `../client/components/Sprites.js`,
  ),

  alias: app => ({
    '@vuepress/plugin-svg-icons/temp': app.dir.temp(`svg-icon/svg-icon`),
  }),

  define: {
    __SVG_ICON_ID_PREFIX__: iconIdPrefix,
    __SVG_ICON_COMPONENT_NAME__: componentName,
    __SVG_ICON_DEFAULT_PROPS_OPTIONS__: defaultPropsOptions,
  },

  async onPrepared(app) {
    const svgIconsDir = path.isAbsolute(svgsDir)
      ? svgsDir
      : app.dir.source(svgsDir)

    if (!fs.existsSync(svgIconsDir)) {
      console.error(`@goy/svg-icons: Can not find folder ${svgIconsDir}`)
    }

    const svgIconsData = await genSvgSprites(svgIconsDir, {
      prefix: iconIdPrefix,
    })

    const SVGIconContent = `
      export const SVGIconData = '${svgIconsData}'
    `
    app.writeTemp(`svg-icon/svg-icon.js`, SVGIconContent)
  },
})
