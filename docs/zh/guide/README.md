# 用户引导

::: tip
__Vuepress-plugin-svg-icons__ 是一款面向 [Vuepress](https://vuepress.vuejs.org/) 用户，帮助你在 Vuepress 站点中快捷地通过 __svg-sprite-icon__ 技术来使用 __SVG__ 图标的插件。
:::

::: danger
Vuepress 从 __v1.x__ 开始支持插件系统，你可以通过 `npm i vuepress@next -D` 来下载，目前该版本仍在测试中。
:::

## 安装依赖

通过 NPM 或者 Yarn 安装 `@goy/vuepress-plugin-svg-icons`：

``` bash
$ npm install @goy/vuepress-plugin-svg-icons -D
# or
$ yarn add @goy/vuepress-plugin-svg-icons -D
```

## 快速使用

::: tip
通过 [Vuepress 官方文档](https://v1.vuepress.vuejs.org/zh/plugin/using-a-plugin.html) 了解更详细的插件使用方法。
:::

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
所有 SVG 文件存放目录下的 `.svg` 文件将会被插件 __自动__ 导入。

::: tip
建议将 SVG 文件放到 `.vuepress` 路径下，方便使用模板语法传入路径。

或者可以引入 __path__ 模块，使用 `path.resolve` 方法来 SVG 文件存放路径。
:::

同时插件已经注册了 SVG 图标组件，你可以在你的 Vuepress Markdown 文件 或者 你的定制 `Components` 中使用它。

默认注册的组件名为 __VpIcon__，使用方法如下：

::: danger 注意
必须为组件提供一个 `name` 属性，值为你想使用的 `.svg` 图标文件名，且你的 SVG 文件存档文件夹内存在同名文件。
:::

``` markdown
<vp-icon name="vue" />
```

## CLI命令

__Vueprss-svg-sprite-icons__ 还集成了 __[SVGO](https://github.com/svg/svgo)__，同时对外提供了一个简单的 CLI 命令 `vuepress svgo [docsDir]`，来帮助你优化 __SVG__ 图标尺寸。

你只需要做简单的配置。编辑你的 `package.json` 文件。

``` json
{
  "scripts": {
    "dev": "vuepress dev docs",
    "build": "vuepress build docs",
    "svgo": "vuepress svgo docs"
  }
}
```

假设你的文档在 `docs` 目录，你可以做如上配置，然后运行 `npm run svgo`，插件会帮你优化你存放 SVG 文件目录下所有的 `.svg` 文件。

## 更多配置

参数 | 类型 | 默认值 | 作用
--- | :---: | :---: | ---
componentName | String | VpIcon | 设置 SVG icons 组件名
classPrefix | String | vp-icon | 设置 `svg` 元素类名和类名前缀
defaultColor | String | currentColor | 设置所有 `svg` 元素默认填充颜色
defaultGutter | String/Number | 0 | 设置 `svg` 元素 左右外边距。

::: warning TIP
参数 `componentName` 建议使用 __大驼峰__ 命名格式。

参数 `defaultColor` 需要符合 SVG fill 属性颜色取值规范，否则将不会生效。

参数 `defaultGutter` 建议只有在想对整站多数图标添加外边距时才启用。
:::

## 配置示例

``` js
module.exports = {
  plugins: [
    [
      '@goy/svg-icons',
      {
        svgsDir: `${__dirname}/svgs`,
        componentName: 'VI',
        classPrefix: 'v-i',
        defaultColor: '#aaa',
        defaultGutter: '0.1em'
      }
    ]
  ]
}
```

说明：

1. 所有要用到的 SVG 图标文件将会保存到与 `config.js` 同目录层级下的 `svgs` 文件夹内。
2. 设置插件提供的图标组件名为 `VI`，在 Markdown 中使用 `<v-i name="vue" />`。
3. 设置插件生成的 `svg` 元素上的类为 `v-i`，说明 2 里的组件渲染出的元素上将有 `v-i` 和 `v-i-vue` 两个 `class`。
4. 若未使用样式覆盖重写，使用组件渲染出的 `svg` 图标 默认图标的填充色将为 `#4fc08d`。
5. 渲染出的 `svg` 图标两边将带有 `0.1em` 的外边距(`margin`)，若设置数字，则单位默认为 `px`。

## 图标来源

1. [**Iconfont**](https://www.iconfont.cn/collections/index) 强烈推荐
2. 设计提供或者自己设计(`Sketch`, `AI`)。
3. 其他来源。
