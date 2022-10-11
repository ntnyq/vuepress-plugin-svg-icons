# Guide

**vuepress-plugin-svg-icons** is a VuePress plugin that makes it available to use **svg-sprite-icon** in VuePress.

## Install

```bash
$ npm install @goy/vuepress-plugin-svg-icons -D
# or
$ yarn add @goy/vuepress-plugin-svg-icons -D
```

## Usage

> See [Official Docs](https://v2.vuepress.vuejs.org/guide/plugin.html#plugin) about how to use plugin in VuePress.

```js
import { defineUserConfig } from '@vuepress/cli'
import { svgIconPlugin } from '@goy/vuepress-plugin-svg-icons'

export default defineUserConfig({
  plugins: [svgIconPlugin()],
})
```

Create a folder named `icons` in your document `sourceDir` and put all your SVG files in it.

All icons will be loaded automatic.

The plugin provide a **global component** named **`VpIcon`**.

Just enjoy it!

::: warning
A `name` prop must be provided to specific the SVG file name you gonna use.

And the file must exists wherever you put your SVG files in.
:::

i.e:

```markdown
<vp-icon name="vue" />
```

<vp-icon name="github" color="purple" size="4em" />
<vp-icon name="star" color="orange" size="4em" />

## Options

### svgsDir

-   **type:** `string`
-   **default:** `icons`

The path to your svg files directory.

If a relative path is specified, it will be resolved based on `sourceDir`.

### componentName

-   **type:** `string`
-   **default:** `VpIcon`

Custom the svg icon component name if needed.

## Component Props

The **VpIcon** component's props.

### color

-   **type** `string`
-   **default** `undefined`

Custom the icon color.

### size

-   **type** `string`
-   **default** `undefined`

Custom the icon size.

## Custom style

By default, those variables are set to vuepress-plugin-svg-icons.

```css
:root {
    --vp-icon-color: currentcolor;
}
```

Override it in your stylesheet if needed.
