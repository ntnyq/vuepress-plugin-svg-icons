<h1 style="text-align: center;">Vuepress Plugin - SvgIcons</h1>

![npm](https://img.shields.io/npm/v/@goy/vuepress-plugin-svg-icons.svg)
![npm](https://img.shields.io/npm/dy/@goy/vuepress-plugin-svg-icons.svg)
![npm](https://img.shields.io/npm/l/@goy/vuepress-plugin-svg-icons.svg)

:heart: Svg sprite plugin for [Vuepress](https://vuepress.vuejs.org)

:book: [Live Demo and Docs](https://vp-icon.goyfe.com)

## Install

> Vuepress started to support plugins since v1.x, you can install it with `npm i vuepress@next -D`

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
    '@goy/svg-icons': {
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

[Custom options detail](https://vp-icon.goyfe.com/guide)
