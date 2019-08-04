const { exec } = require('child_process')
const { resolve } = require('path')
const { genSvgSprites } = require('./utils')

module.exports = ({ svgsDir = '', ...options }) => {
  genSvgSprites({ svgsDir })

  return {
    name: '@goy/vuepress-plugin-svg-icons',

    enhanceAppFiles: resolve(__dirname, 'enhanceAppFile.js'),

    define: {
      SVG_ICON_OPTIONS: JSON.stringify(options)
    },

    extendCli (cli) {
      cli
        .command('svgo [targetDir]', '')
        .action(() => {
          /**
           * Optimize .svg files
           */
          const configFilePath = resolve(__dirname, 'svgo.yml')

          exec(`svgo -f ${svgsDir} --config=${configFilePath}`, err => {
            if (err) throw new Error(err)

            console.log(`\nSvgo optimized svg icons done!\n`)
          })
        })
    }
  }
}
