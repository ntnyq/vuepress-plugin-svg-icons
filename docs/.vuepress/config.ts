import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { shikiPlugin } from '@vuepress/plugin-shiki'
import { svgIconPlugin } from '@goy/vuepress-plugin-svg-icons'

export default defineUserConfig({
  title: 'vuepress-plugin-svg-icons',

  description: 'Using SVG sprite icons in VuePress',

  bundler: viteBundler(),

  plugins: [
    shikiPlugin({
      langs: [
        'js',
        'ts',
        'md',
        'jsx',
        'tsx',
        'html',
        'vue',
        'css',
        'scss',
        'json',
        'jsonc',
        'yml',
        'yaml',
        'bash',
        'shell',
      ],
      theme: 'one-dark-pro',
    }),
    svgIconPlugin(),
  ],

  theme: defaultTheme({
    repo: 'ntnyq/vuepress-plugin-svg-icons',
    docsRepo: 'ntnyq/vuepress-plugin-svg-icons',
    docsDir: 'docs',
    docsBranch: 'main',
    editLink: true,
    lastUpdated: true,
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
