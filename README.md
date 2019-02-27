# Vuepress Plugin - SvgIcons

:heart: Svg sprite plugin for [Vuepress](https://vuepress.vuejs.org)

:book: [Live Demo](https://ntnyq.github.io/vuepress-pligin-svg-icons)

## Install

``` bash
# with npm
$ npm install @goy/vuepress-plugin-svg-icons

# with yarn
$ yarn add @goy/vuepress-plugin-svg-icons
```

# Usage

``` js
// .vuepress/config.js

module.exports = {
  plugins: [
    '@goy/vuepress-plugin-svg-icons': {
      // 设置 SVG 图标文件存放路径，注意需使用 绝对路径
      svgsDir: `${__dirname}/svgs`
    }
  ]
}
```

All `.svg` icons would be loaded automatic. And regist a vue component named `vp-icon`.

``` markdown
<vp-icon  name="github" />

<vp-icon color="#3eaf7c"  name="vue" />
```

[Custom options detail](https://ntnyq.github.io/vuepress-pligin-svg-icons/guide)


