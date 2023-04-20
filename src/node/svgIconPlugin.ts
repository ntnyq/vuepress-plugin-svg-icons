import { existsSync } from 'node:fs'
import { URL, fileURLToPath } from 'node:url'
import { isAbsolute, resolve } from 'node:path'
import { genSvgSprites } from './utils.js'
import type { Plugin } from 'vuepress'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

export interface SvgIconPluginOptions {
  svgsDir?: string
  iconIdPrefix?: string
  componentName?: string
  defaultPropsOptions?: Record<string, any>
}

export const svgIconPlugin = ({
  svgsDir = 'icons',
  componentName = 'VpIcon',
  iconIdPrefix = 'vp_icon_',
  defaultPropsOptions = {},
}: SvgIconPluginOptions = {}): Plugin => ({
  name: '@goy/svg-icons',

  clientConfigFile: resolve(__dirname, '../client/config.js'),

  alias: app => ({
    '@vuepress/plugin-svg-icons/data': app.dir.temp('svg-icons/data'),
  }),

  define: {
    __SVG_ICON_ID_PREFIX__: iconIdPrefix,
    __SVG_ICON_COMPONENT_NAME__: componentName,
    __SVG_ICON_DEFAULT_PROPS_OPTIONS__: defaultPropsOptions,
  },

  async onPrepared(app) {
    const svgIconsDir = isAbsolute(svgsDir) ? svgsDir : app.dir.source(svgsDir)

    if (!existsSync(svgIconsDir)) {
      console.error(`@goy/svg-icons: Can not find folder ${svgIconsDir}`)
    }

    const svgIconsData = await genSvgSprites(svgIconsDir, { prefix: iconIdPrefix })
    app.writeTemp('svg-icons/data.js', `export const SVGIconsData = '${svgIconsData}'`)
  },
})
