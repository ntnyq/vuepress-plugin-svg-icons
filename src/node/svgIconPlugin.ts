import { fs, getDirname, path } from 'vuepress/utils'
import { getSVGIconsData } from './utils.js'
import type { Plugin } from 'vuepress'
import type { SvgIconPropsOptions } from '../shared/index.js'

const __dirname = getDirname(import.meta.url)

export interface SvgIconPluginOptions {
  /**
   * svg files directory based on source dir
   *
   * @default `icons`
   */
  svgsDir?: string

  /**
   * icon id prefix
   *
   * @default `vp_icon_`
   */
  iconIdPrefix?: string

  /**
   * icon component name
   *
   * @default `VpIcon`
   */
  componentName?: string

  /**
   * default props for icon component
   *
   * @default {}
   */
  defaultPropsOptions?: SvgIconPropsOptions
}

export const svgIconPlugin = (options: SvgIconPluginOptions = {}): Plugin => {
  const {
    svgsDir = 'icons',
    componentName = 'VpIcon',
    iconIdPrefix = 'vp_icon_',
    defaultPropsOptions = {},
  } = options

  return {
    name: '@goy/svg-icons',

    clientConfigFile: path.resolve(__dirname, '../client/config.js'),

    alias: app => ({
      '@vuepress/plugin-svg-icons/data': app.dir.temp('svg-icons/data'),
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

      const svgIconsData = await getSVGIconsData(svgIconsDir, {
        prefix: iconIdPrefix,
      })

      app.writeTemp(
        'svg-icons/data.js',
        `export const SVGIconsData = \`${svgIconsData}\``,
      )
    },
  }
}
