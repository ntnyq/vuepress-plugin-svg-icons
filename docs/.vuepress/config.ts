import { defineUserConfig } from '@vuepress/cli'
import { defaultTheme } from '@vuepress/theme-default'
import { svgIconPlugin } from '@goy/vuepress-plugin-svg-icons'

export default defineUserConfig({
  title: `vuepress-plugin-svg-icons`,

  description: `Using SVG sprite icons in VuePress`,

  dest: `site`,

  plugins: [svgIconPlugin()],

  theme: defaultTheme({
    repo: `ntnyq/vuepress-plugin-svg-icons`,
    docsRepo: `ntnyq/vuepress-plugin-svg-icons`,
    docsDir: `docs`,
    docsBranch: `main`,
    editLinks: true,
    lastUpdated: true,
    editLinkText: `Edit this page on GitHub`,
    lastUpdatedText: `Last Updated at`,
    navbar: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      {
        text: 'Changelog',
        link: `https://github.com/ntnyq/vuepress-plugin-svg-icons/blob/main/CHANGELOG.md`,
      },
    ],
    sidebar: [`/guide/`],
  }),
})
