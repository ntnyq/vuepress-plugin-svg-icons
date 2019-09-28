const { exec } = require('child_process')
const path = require('path')
const { genSvgSprites } = require('./utils')

const resolve = (...args) => path.resolve(__dirname, ...args)

module.exports = (
  { svgsDir = 'icons', ...options },
  { sourceDir }
) => {
  const svgIconsPath = path.isAbsolute(svgsDir) ? svgsDir : path.resolve(sourceDir, svgsDir)
  const { iconIdPrefix = 'vp_icon_' } = options

  return {
    name: '@goy/svg-icons',

    enhanceAppFiles: resolve('enhanceApp.js'),

    define: {
      SVG_ICON_OPTIONS: JSON.stringify(options),
    },

    async clientDynamicModules () {
      const svgIconsData = await genSvgSprites(svgIconsPath, iconIdPrefix)

      return {
        name: 'svg-icons-data.js',
        content: `export default \`${svgIconsData}\``,
      }
    },

    extendCli (cli) {
      cli
        .command('svgo [targetDir]', '')
        .action(() => {
          /**
           * Optimize svg files via SVGO
           */
          exec(`svgo -f ${svgIconsPath} --config=${resolve('svgo.yml')}`, err => {
            if (err) throw new Error(err)

            console.log(`SVGO optimized svg icons done!\n`)
          })
        })
    },
  }
}
