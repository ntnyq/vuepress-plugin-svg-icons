const { exec } = require('child_process')
const { resolve, isAbsolute } = require('path')
const { genSvgSprites, defaultIconIdPrefix } = require('./utils')

module.exports = (
  { svgsDir = 'icons', ...options },
  { sourceDir }
) => {
  const svgIconsPath = isAbsolute(svgsDir) ? svgsDir : resolve(sourceDir, svgsDir)
  const { iconIdPrefix = defaultIconIdPrefix } = options

  return {
    name: '@goy/svg-icons',

    enhanceAppFiles: resolve(__dirname, 'enhanceApp.js'),

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
          exec(`svgo -f ${svgIconsPath} --config=${resolve(__dirname, 'svgo.yml')}`, err => {
            if (err) throw new Error(err)

            console.log(`SVGO optimized svg icons done!\n`)
          })
        })
    },
  }
}
