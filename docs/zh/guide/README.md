# 用户引导

__Vuepress-plugin-svg-icons__ 是一款方便 VuePress 用户使用 __svg-sprite-icon__ 图标技术的插件。

## 安装依赖

``` bash
$ npm install @goy/vuepress-plugin-svg-icons -D
# or
$ yarn add @goy/vuepress-plugin-svg-icons -D
```

## 简单使用

> 查阅 [官方文档](https://v1.vuepress.vuejs.org/zh/plugin/using-a-plugin.html) 了解如何在 VuePress 中使用插件。

在配置文件中引入 __vuepress-plugin-svg-icons__ 。

``` js
module.exports = {
  plugins: [
    '@goy/svg-icons'
  ]
}
```

在你的 VuePress 文档根目录下创建名为 `icons` 的文件夹，并将你需要插件管理的 `.svg` 文件都放入其中。

所有的图标文件都会被插件自动导入。

插件对外提供了一个名为 __`VpIcon`__ 的 __全局组件__ 。

开始使用吧!

::: warning
必须为组件提供一个 `name` 属性，值为你想使用的 `.svg` 图标文件名。

且你的 `.svg` 文件存放文件夹内必须存在同名文件。
:::

例:

``` markdown
<vp-icon name="vue" />
```

## 配置详解

高级应用：

``` js
module.exports = {
  plugins: [
    ['@goy/svg-icons', {
      svgsDir: 'svgs',
      componentName: 'SvgIcon',
      classPrefix: 'icon',
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

### classPrefix

- __type:__ `string`
- __default:__ `vp-icon`

所有 SVG 元素的通用 `class` 属性和 `class` 属性前缀。

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

__Vueprss-svg-sprite-icons__ 集成了 __[SVGO](https://github.com/svg/svgo)__，同时对外提供了一个 CLI 命令 `vuepress svgo [docsDir]`，来帮助你优化 __SVG__ 图标大小。

``` json
{
  "scripts": {
    "dev": "vuepress dev docs",
    "build": "vuepress build docs",
    "svgo": "vuepress svgo docs"
  }
}
```

假设你的 VuePress 文档在 `docs` 目录，你可以做如上配置，然后运行 `npm run svgo`，插件会帮你优化目录下所有的 `.svg` 文件大小。

## 图标来源

1. [**Iconfont**](https://www.iconfont.cn/collections/index) 强烈推荐
2. 设计提供或者自己设计(`Sketch`, `AI`)。
3. 其他来源。
