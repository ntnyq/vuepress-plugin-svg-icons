const CHANGELOG_LINK = `https://github.com/ntnyq/vuepress-plugin-svg-icons/blob/master/CHANGELOG.md`

module.exports = {
  title: 'vuepress-plugin-svg-icons',
  description: 'Using SVG sprite icons in VuePress',
  dest: 'site',
  plugins: [
    require('../../lib'),
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
          { text: 'Changelog', link: CHANGELOG_LINK },
        ],
        sidebar: ['/guide/'],
      },
    },
  },
}
