# Guide

__Vuepress-plugin-svg-icons__ is a VuePress plugin that makes it available to use __svg-sprite-icon__ in VuePress.

## Install

``` bash
$ npm install @goy/vuepress-plugin-svg-icons -D
# or
$ yarn add @goy/vuepress-plugin-svg-icons -D
```

## Usage

> See [Official Docs](https://v1.vuepress.vuejs.org/zh/plugin/using-a-plugin.html) about how to use plugin in VuePress.

Add __vuepress-plugin-svg-icons__ to your config file.

``` js
module.exports = {
  plugins: [
    '@goy/svg-icons'
  ]
}
```

Create a folder named `icons` in your document `sourceDir` and put all your `.svg` files in it.

All icons will be loaded automaticly. 

The plugin provide a __global component__ named __`VpIcon`__. 

Just enjoy it!

::: warning
A `name` attribute must provide to specific the `.svg` file name you gonna use.

And the file must exist wherever you put your `.svg` files in. 
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

The path to your svg files directory. 

If a relative path is specified, it will be resolved based on `sourceDir`.

### componentName

- __type:__ `string`
- __default:__ `VpIcon`

Your custom component name to replace the default `VpIcon`.

It's highly recommended to give a name in `Pascal` style.

### classPrefix

- __type:__ `string`
- __default:__ `vp-icon`

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

__Vueprss-svg-sprite-icons__ has __[SVGO](https://github.com/svg/svgo)__ intergrated and supplied a CLI command `vuepress svgo [docsDir]` to help you optimize your svg files.

Add `"svgo": "vuepress svgo docs"` [i.e] to your `package.json` file and run it then the plugin will do the rest.

When the command finished, all your SVG files will be optimized in size.

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
