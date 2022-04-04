import fs from 'fs'
import path from 'path'
import { exec } from 'child_process'
import type { Plugin } from 'vuepress-types'
import { genSvgSprites } from './utils'

export interface SvgIconsPluginOptions {
  svgsDir?: string
  svgoConfig?: string
  iconIdPrefix?: string
}

const SvgIconsPlugin: Plugin<SvgIconsPluginOptions> = (
  { svgsDir = `icons`, svgoConfig, ...options } = {},
  { sourceDir }
) => {
  const svgIconsPath = path.isAbsolute(svgsDir)
    ? svgsDir
    : path.resolve(sourceDir, svgsDir)
  const { iconIdPrefix = `vp_icon_` } = options
  let svgoConfigPath: string

  if (!fs.existsSync(svgIconsPath)) {
    console.error(`@goy/svg-icons: Can not find folder ${svgIconsPath}`)
  }

  if (svgoConfig) {
    svgoConfigPath = path.isAbsolute(svgoConfig)
      ? svgoConfig
      : path.resolve(sourceDir, svgoConfig)
  } else {
    svgoConfigPath = path.resolve(__dirname, `svgo.config.js`)
  }

  return {
    name: `@goy/svg-icons`,

    enhanceAppFiles: path.resolve(__dirname, `./enhanceApp.js`),

    async clientDynamicModules() {
      const svgIconsData = await genSvgSprites(svgIconsPath, iconIdPrefix)

      return {
        name: 'svg-icons.js',
        content: `
          export const svgIconsData = '${svgIconsData}'
          export const svgIconsOptions = ${JSON.stringify(options)}
        `,
      }
    },

    extendCli(cli) {
      cli.command('svgo [targetDir]', '').action(() => {
        /**
         * Optimize svg files via SVGO
         */
        exec(`svgo -f ${svgIconsPath} --config=${svgoConfigPath}`, err => {
          if (err) throw new Error(err.message)

          console.log(`SVGO optimized svg icons done!\n`)
        })
      })
    },
  }
}

module.exports = SvgIconsPlugin
