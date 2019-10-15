# Guide

__vuepress-plugin-svg-icons__ is a VuePress plugin that makes it available to use __svg-sprite-icon__ in VuePress.

## Install

``` bash
$ npm install @goy/vuepress-plugin-svg-icons -D
# or
$ yarn add @goy/vuepress-plugin-svg-icons -D
```

## Usage

> See [Official Docs](https://v1.vuepress.vuejs.org/zh/plugin/using-a-plugin.html) about how to use plugin in VuePress.

Edit your `.vuepress/config.js`:

``` js
module.exports = {
  plugins: [
    '@goy/svg-icons'
  ]
}
```

Create a folder named `icons` in your document `sourceDir` and put all your SVG files in it.

All icons will be loaded automaticly. 

The plugin provide a __global component__ named __`VpIcon`__. 

Just enjoy it!

::: warning
A `name` attribute must be provided to specific the SVG file name you gonna use.

And the file must exists wherever you put your SVG files in. 
:::

i.e:

``` markdown
<vp-icon name="vue" />
```

<vp-icon name="github" color="purple" size="4em" />
<vp-icon name="star" color="orange" size="4em" />

## Configurations

``` js
module.exports = {
  plugins: [
    ['@goy/svg-icons', {
      svgsDir: 'svgs',
    }]
  ]
}
```

### svgsDir

- __type:__ `string`
- __default:__ `icons`

The path to your svg files directory. 

If a relative path is specified, it will be resolved based on `sourceDir`.

## Component Props

The __VpIcon__ component's props.

### color

- __type__ `string`
- __default__ `undefined`

Custom the icon color.

## Custom style

By default, those variables are set to vuepress-plugin-svg-icons.

``` stylus
// vuepress-plugin-svg-icons/lib/style.styl

$vp-icon-color ?= currentColor
```

If you want to override them, just set them in your `palette.styl`:

``` stylus
// .vuepress/styles/palette.styl

$vp-icon-color = red
```

## CLI Command

vueprss-svg-sprite-icons has __[SVGO](https://github.com/svg/svgo)__ intergrated and supplied a CLI command `vuepress svgo [docsDir]` to help you optimize your svg files.

Add `"svgo": "vuepress svgo docs"` to your `package.json` file's __scripts__ field and run it then the plugin will do the rest.

``` json
{
  "scripts": {
    "dev": "vuepress dev docs",
    "build": "vuepress build docs",
    "svgo": "vuepress svgo docs"
  }
}
```

## Icon source

1. __[Iconfont](https://www.iconfont.cn/collections/index)__ - strongly recommended
2. From web designer or create svg file yourself using (`Sketch`, `AI`)。
3. Etc.
