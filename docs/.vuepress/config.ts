import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { svgIconPlugin } from '@goy/vuepress-plugin-svg-icons'

export default defineUserConfig({
  title: 'vuepress-plugin-svg-icons',

  description: 'Using SVG sprite icons in VuePress',

  bundler: viteBundler(),

  plugins: [svgIconPlugin()],

  theme: defaultTheme({
    repo: 'ntnyq/vuepress-plugin-svg-icons',
    docsRepo: 'ntnyq/vuepress-plugin-svg-icons',
    docsDir: 'docs',
    docsBranch: 'main',
    editLink: true,
    lastUpdated: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdatedText: 'Last Updated at',
    navbar: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      {
        text: 'Changelog',
        link: 'https://github.com/ntnyq/vuepress-plugin-svg-icons/blob/main/CHANGELOG.md',
      },
    ],
    sidebar: ['/guide/'],
  }),
})
