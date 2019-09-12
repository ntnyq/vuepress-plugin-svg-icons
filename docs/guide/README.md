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
A `name` attribute must provide to specific the SVG file name you gonna use.

And the file must exist wherever you put your SVG files in. 
:::

i.e:

``` markdown
<vp-icon name="vue" />
```

## Configurations

For advanced usage.

``` js
module.exports = {
  plugins: [
    ['@goy/svg-icons', {
      svgsDir: 'svgs',
      componentName: 'SvgIcon',
      iconIdPrefix: 'svg_icon_',
      iconClassPrefix: 'svg-icon-',
      defaultColor: '#333',
      defaultGutter: '0.1em'
    }]
  ]
}
```

### svgsDir

- __type:__ `string`
- __default:__ `icons`

The path to your svg files directory. 

If a relative path is specified, it will be resolved based on `sourceDir`.

### componentName

- __type:__ `string`
- __default:__ `VpIcon`

Your custom component name to replace the default `VpIcon`.

It's highly recommended to give a name in `Pascal` style.

### iconIdPrefix

- __type:__ `string`
- __default:__ `vp_icon_`

Your custom id prefix for all svg symbols.

### iconClassPrefix

- __type:__ `string`
- __default:__ `vp-icon-`

Your custom class and class prefix for all svg element.

### defaultColor

- __type:__ `string`
- __default:__ `currentColor`

Your custom color for all svg element if no color provided.

### defaultGutter

- __type:__ `string | number`
- __default:__ 0

Your custom marginLeft and marginRight for all svg element.

If it's a number, the unit will be `px`.

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
