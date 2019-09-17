# 用户引导

__vuepress-plugin-svg-icons__ 是一款方便 VuePress 用户使用 __svg-sprite-icon__ 技术的插件。

## 安装依赖

``` bash
$ npm install @goy/vuepress-plugin-svg-icons -D
# or
$ yarn add @goy/vuepress-plugin-svg-icons -D
```

## 简单使用

> 阅读 [官方文档](https://v1.vuepress.vuejs.org/zh/plugin/using-a-plugin.html) 了解如何在 VuePress 中使用插件。

编辑配置文件 `.vuepress/config.js`

``` js
module.exports = {
  plugins: [
    '@goy/svg-icons'
  ]
}
```

在你的 VuePress 文档根目录下创建名为 `icons` 的文件夹，并将你需要插件管理的 SVG 文件都放入其中。

所有的图标文件都会被插件自动导入。

插件对外提供了一个默认名为 __`VpIcon`__ 的 __全局组件__ 。

开始使用吧!

::: warning
必须为组件提供一个 `name` 属性，值为你要使用的 SVG 图标文件名。

且对应的 SVG 文件存放文件夹内必须存在同名文件。
:::

例:

``` markdown
<vp-icon name="vue" />
```

## 高级用法

如果你正在为 VuePress 开发一款主题或者插件, 强烈建议你在使用本插件时配置做以下自定义配置：

``` js
const { resolve } = require('path')

module.exports = options => {
  return {
    plugins: [
      ['@goy/svg-icons', {
        svgsDir: resolve(__dirname, 'icons'),
        componentName: 'FooBarIcon',
        iconIdPrefix: 'foo_bar_icon_',
        iconClassPrefix: 'foo-bar-icon-',
        iconCommonClass: 'foo-bar-icon',
      }]
    ]
  }
}
```

在 Markdown 中使用：

``` markdown
<foo-bar-icon name="vue" />
```

## 配置详解

``` js
module.exports = {
  plugins: [
    ['@goy/svg-icons', {
      svgsDir: 'svgs',
      componentName: 'SvgIcon',
      iconIdPrefix: 'svg_icon_',
      iconClassPrefix: 'svg-icon-',
      iconCommonClass: 'svg-icon',
      defaultColor: '#333',
      defaultGutter: '0.1em'
    }]
  ]
}
```

### svgsDir

- __type:__ `string`
- __default:__ `icons`

存放 `.svg` 文件的目录地址。

如果提供的为相对地址，则会以 VuePress 文档根目录为基准确定图标文件夹地址。

### componentName

- __type:__ `string`
- __default:__ `VpIcon`

自定义的替代默认 `VpIcon` 的全局组件组件名。

强烈建议使用 `Pascal` 形式的命名。（单词首字母大写）

### iconIdPrefix

- __type:__ `string`
- __default:__ `vp_icon_`

SVG Sprite 中 `symbol` 的通用 `id` 前缀。

### iconClassPrefix

- __type:__ `string`
- __default:__ `vp-icon-`

所有 SVG 元素的通用 `class` 属性前缀。

### iconCommonClass

- __type:__ `string`
- __default:__ `vp-icon`

所有 SVG 元素的通用 `class` 属性。

### defaultColor

- __type:__ `string`
- __default:__ `currentColor`

使用时未提供颜色情况下，所有 SVG 元素的通用颜色。

### defaultGutter

- __type:__ `string | number`
- __default:__ 0

所有 SVG 元素的左右外边距。

如果提供的值为数字，则其单位为 `px`。

## CLI命令

vueprss-svg-sprite-icons 集成了 __[SVGO](https://github.com/svg/svgo)__，同时对外提供了一个 CLI 命令 `vuepress svgo [docsDir]`，来帮助你优化 SVG 图标体积。

``` json
{
  "scripts": {
    "dev": "vuepress dev docs",
    "build": "vuepress build docs",
    "svgo": "vuepress svgo docs"
  }
}
```

假设你的 VuePress 文档在 `docs` 目录，你可以做如上配置，再运行 `npm run svgo` 进行图标优化。

## 图标来源

1. 强烈推荐 __[Iconfont](https://www.iconfont.cn/collections/index)__ 
2. 设计提供或者自己设计(`Sketch`, `AI`)
3. 其他来源。
