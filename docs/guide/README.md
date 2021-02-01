# Guide

**vuepress-plugin-svg-icons** is a VuePress plugin that makes it available to use **svg-sprite-icon** in VuePress.

## Install

```bash
$ npm install @goy/vuepress-plugin-svg-icons -D
# or
$ yarn add @goy/vuepress-plugin-svg-icons -D
```

## Usage

> See [Official Docs](https://v1.vuepress.vuejs.org/zh/plugin/using-a-plugin.html) about how to use plugin in VuePress.

Edit your `.vuepress/config.js`:

```js
module.exports = {
    plugins: ['@goy/svg-icons'],
}
```

Create a folder named `icons` in your document `sourceDir` and put all your SVG files in it.

All icons will be loaded automatic.

The plugin provide a **global component** named **`VpIcon`**.

Just enjoy it!

::: warning
A `name` attribute must be provided to specific the SVG file name you gonna use.

And the file must exists wherever you put your SVG files in.
:::

i.e:

```markdown
<vp-icon name="vue" />
```

<vp-icon name="github" color="purple" size="4em" />
<vp-icon name="star" color="orange" size="4em" />

## Configurations

```js
module.exports = {
    plugins: [
        [
            '@goy/svg-icons',
            {
                svgsDir: 'svgs',
            },
        ],
    ],
}
```

### svgsDir

-   **type:** `string`
-   **default:** `icons`

The path to your svg files directory.

If a relative path is specified, it will be resolved based on `sourceDir`.

## Component Props

The **VpIcon** component's props.

### color

-   **type** `string`
-   **default** `undefined`

Custom the icon color.

## Custom style

By default, those variables are set to vuepress-plugin-svg-icons.

```stylus
// vuepress-plugin-svg-icons/lib/style.styl

$vp-icon-color ?= currentColor
```

If you want to override them, just set them in your `palette.styl`:

```stylus
// .vuepress/styles/palette.styl

$vp-icon-color = red
```

## CLI Command

vuepress-svg-sprite-icons has **[SVGO](https://github.com/svg/svgo)** intergrated and supplied a CLI command `vuepress svgo [docsDir]` to help you optimize your svg files.

Add `"svgo": "vuepress svgo docs"` to your `package.json` file's **scripts** field and run it then the plugin will do the rest.

```json
{
    "scripts": {
        "dev": "vuepress dev docs",
        "build": "vuepress build docs",
        "svgo": "vuepress svgo docs"
    }
}
```

## Icon source

1. **[Iconfont](https://www.iconfont.cn/collections/index)** - strongly recommended
2. From web designer or create svg file yourself using (`Sketch`, `AI`)。
3. Etc.
