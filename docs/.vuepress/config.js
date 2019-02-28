const path = require('path')

module.exports = {
  title: 'Vuepress-plugin-svg-icons',
  description: '在 Vuepress 中使用 SVG sprite icon',
  dest: 'site',
<<<<<<< HEAD
=======
  base: '/vuepress-plugin-svg-icons/',
>>>>>>> cdb6a0a... Update config.js
  locals: {
    '/': {
      lang: 'zh-CN',
      title: 'Vuepress-plugin-svg-icons',
      description: '在 Vuepress 中使用 SVG sprite icon',
    }
  },
  plugins: [
    [
      require(path.resolve(__dirname, '../../lib')),
      {
        svgsDir: `${__dirname}/svgs`,
        componentName: 'VI',
        classPrefix: 'vp-icon',
        defaultColor: '#aaa',
        defaultGutter: '0.1em'
      }
    ]
  ],
  themeConfig: {
    repo: 'ntnyq/vuepress-plugin-svg-icons',
    docsRepo: 'ntnyq/vuepress-plugin-svg-icons',
    docsDir: 'docs',
    docsBranch: 'master',
    search: false,
    editLinks: true,
    lastUpdated: true,
    nav: [
      { text: '首页', link: '/' },
      { text: '配置使用', link: '/guide/' },
      { text: '示例Demo', link: '/demo/' },
      { text: '更新日志', link: 'https://github.com/ntnyq/vuepress-plugin-svg-icons/blob/master/CHANGELOG.md' }
    ],
    sidebar: [
      '/guide/'
    ]
  }
}
