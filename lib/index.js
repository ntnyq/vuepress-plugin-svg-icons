const { exec } = require('child_process')
const { genSvgSprites } = require('./utils')

module.exports = ({ svgsDir = '', ...options }) => {
  genSvgSprites({ svgsDir })

  return {
    name: '@goy/vuepress-plugin-svg-icons',

    enhanceAppFiles: `${__dirname}/enhanceAppFile.js`,

    define: {
      'SVG_ICON_OPTIONS': JSON.stringify(options)
    },

    extendCli (cli) {
      cli
        .command('svgo [targetDir]', '')
        .action(() => {
          /**
           * Exec svgo in child_process to optimize svg file
           */
          exec(`svgo -f ${svgsDir} --config=${__dirname}/svgo.yml`, err => {
            if (err) throw new Error(err)

            console.log(`\nSvgo optimized svg icons done!\n`)
          })
        })
    }
  }
}
