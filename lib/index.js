const fs = require('fs')
const path = require('path')
const { exec } = require('child_process')
const { genSvgSprites } = require('./utils')
const resolve = (...args) => path.resolve(__dirname, ...args)

module.exports = ({
  svgsDir = 'icons',
  svgConfig,
  ...options
} = {}, { sourceDir }) => {
  const svgIconsPath = path.isAbsolute(svgsDir)
    ? svgsDir
    : path.resolve(sourceDir, svgsDir)
  const { iconIdPrefix = 'vp_icon_' } = options
  let svgoConfigPath

  if (!fs.existsSync(svgIconsPath)) {
    console.error(`@goy/svg-icons: Can not find folder ${svgIconsPath}`)
  }

  if (svgConfig) {
    svgoConfigPath = path.isAbsolute(svgConfig) ? svgConfig : path.resolve(sourceDir, svgConfig)
  } else {
    svgoConfigPath = path.resolve(__dirname, 'svgo.config.js')
  }

  return {
    name: '@goy/svg-icons',

    enhanceAppFiles: resolve('enhanceApp.js'),

    async clientDynamicModules () {
      const svgIconsData = await genSvgSprites(svgIconsPath, iconIdPrefix)

      return {
        name: 'svg-icons.js',
        content: `
          export const svgIconsData = '${svgIconsData}'
          export const svgIconsOptions = ${JSON.stringify(options)}
        `,
      }
    },

    extendCli (cli) {
      cli.command('svgo [targetDir]', '').action(() => {
        /**
         * Optimize svg files via SVGO
         */
        exec(`svgo -f ${svgIconsPath} --config=${svgoConfigPath}`, err => {
          if (err) throw new Error(err)

          console.log(`SVGO optimized svg icons done!\n`)
        })
      })
    },
  }
}
