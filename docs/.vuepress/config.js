const { resolve } = require('path')

module.exports = {
  title: 'Vuepress-plugin-svg-icons',
  description: '在 VuePress 中使用 SVG sprite icons',
  dest: 'site',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Vuepress-plugin-svg-icons',
      description: 'Using SVG sprite icons in VuePress'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'Vuepress-plugin-svg-icons',
      description: '在Vuepress中使用SVG精灵图标'
    }
  },
  plugins: [
    [
      require(resolve(__dirname, '../../lib')),
      {
        svgsDir: 'icons',
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
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Guide', link: '/guide/' },
          { text: 'Demo', link: '/demo/' },
          { text: 'Changelog', link: 'https://github.com/ntnyq/vuepress-plugin-svg-icons/blob/master/CHANGELOG.md' }
        ],
        sidebar: ['/guide/']
      },
      '/zh/': {
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        nav: [
          { text: '首页', link: '/zh/' },
          { text: '配置引导', link: '/zh/guide/' },
          { text: '示例Demo', link: '/zh/demo/' },
          { text: '更新日志', link: 'https://github.com/ntnyq/vuepress-plugin-svg-icons/blob/master/CHANGELOG.md' }
        ],
        sidebar: ['/zh/guide/']
      }
    }
  }
}
