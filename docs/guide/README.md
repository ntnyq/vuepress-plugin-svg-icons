# Guide

__Vuepress-plugin-svg-icons__ is an simple [Vuepress](https://vuepress.vuejs.org/) __plugin__ based on __svg-sprite-icon__ techonology which helps you managing your svg icons elegant.

## Install

``` bash
$ npm install @goy/vuepress-plugin-svg-icons -D
# or
$ yarn add @goy/vuepress-plugin-svg-icons -D
```

## Usage

::: tip
Get more detail about how to use plugin in __Vuepress__ by checking [Vuepress Docs](https://v1.vuepress.vuejs.org/zh/plugin/using-a-plugin.html)
:::

``` js
// .vuepress/config.js
const path = require('path')

module.exports = {
  plugins: [
    '@goy/svg-icons': {
      // Provide a folder in absolute path
      // where your gonna put svg icon files in
      svgsDir: path.resolve(__dirname, 'svgs')
    }
  ]
}
```
All `.svg` icons would be loaded automaticly.
Just enjoy the vue component named `vp-icon` plugin supplied by default.

::: tip
It't highly recommended to put all your SVG icon files' folder in your `.vuepress` directory so that you could use __ES6__ template string to specific the `svgsDir` directory.

Or you could use the __path__ module which provides an API named `path.resolve` can do the same job.
:::

The plugin has registed the SVG icon component itself.

You could use it in your __Vuepress Markdown__ file or your costom __Components__.

By default the plugin component name is __VpIcon__.

::: warning
A `name` attribute must provide to specific the `.svg` file name you gonna use.

And this file must exist in your `svgsDir` directory.
:::

i.e:

``` markdown
<vp-icon name="vue" />
```

## CLI Command

__Vueprss-svg-sprite-icons__ has __[SVGO](https://github.com/svg/svgo)__ intergrate and supplied a simple CLI command `vuepress svgo [docsDir]` to help you optimize you optimize your __SVG__ icon size.

For usage this command，you just need do some simple configuration.

Add `"svgo": "vuepress svgo docs"` [i.e] to your `package.json` file and run it then the plugin will do the rest.

When the command finished, all your SVG files in `svgsDir` will be optimized in size.

``` json
{
  "scripts": {
    "dev": "vuepress dev docs",
    "build": "vuepress build docs",
    "svgo": "vuepress svgo docs"
  }
}
```

## Options

Param | Type | DefaultValue | Usage
--- | :---: | :---: | ---
componentName | String | VpIcon | Custom the vue components's name
classPrefix | String | vp-icon | Set a custom className and common class prefix
defaultColor | String | currentColor | Set a default fill color.
defaultGutter | String/Number | 0 | Set left & right margin.

::: warning TIP
It's highly recommended to set option `componentName` in `Pascal` style.

option `defaultColor` must be a valid svg fill value.

Only if you want add a margin to almost every icons, or you didn't need to set the `defaultGutter` option.
:::

## Example

``` js
const path = require('path')

module.exports = {
  plugins: [
    [
      '@goy/svg-icons',
      {
        svgsDir: path.resolve(__dirname, 'svgs')
        componentName: 'VI',
        classPrefix: 'v-i',
        defaultColor: '#aaa',
        defaultGutter: '0.1em'
      }
    ]
  ]
}
```

Notice:
1. All __SVG__ icons will be put into `svgs` folder which share the same directory with `config.js` file.
2. Set the component this plugin supplied to name `VI`. Then you can use it like this `<v-i name="vue" />` in `markdown` file.
3. Set the icons component's common class to `v-i`，then every component will have two class by default `v-i` && `v-i-${icon_name}`.
4. Set the svg element's default color to `#4fc08d`.
5. Set the svg element's default `margin-left` & `margin-right`. If suppied value is  a number，it's unit will be `px` by defailt.

## Icon source

1. __[Iconfont](https://www.iconfont.cn/collections/index)__ - strongly recommended
2. From web designer or create svg file yourself using (`Sketch`, `AI`)。
3. Etc.
