# vuepress-plugin-svg-icons

[![NPM VERSION](https://img.shields.io/npm/v/@goy/vuepress-plugin-svg-icons.svg)](https://www.npmjs.com/package/@goy/vuepress-plugin-svg-icons)
[![NPM DOWNLOADS](https://img.shields.io/npm/dy/@goy/vuepress-plugin-svg-icons.svg)](https://www.npmjs.com/package/@goy/vuepress-plugin-svg-icons)
[![LICENSE](https://img.shields.io/github/license/ntnyq/vuepress-plugin-svg-icons.svg)](https://github.com/ntnyq/vuepress-plugin-svg-icons/blob/master/LICENSE)

:heart: Svg sprite plugin for [VuePress](https://v2.vuepress.vuejs.org)

:book: [Live Demo and Docs](https://vp-icon.goyfe.com)

## Install

```bash
$ npm install @goy/vuepress-plugin-svg-icons -D
# OR
$ yarn add @goy/vuepress-plugin-svg-icons -D
```

## Usage

For `.vuepress/config.js`:

```js
const svgIconPlugin = require('@goy/vuepress-plugin-svg-icons')

module.exports = {
    plugins: [svgIconPlugin()],
}
```

For `.vuepress/config.ts`

```ts
import { defineUserConfig } from '@vuepress/cli'
import { svgIconPlugin } from '@goy/vuepress-plugin-svg-icons'

export default defineUserConfig({
    plugins: [svgIconPlugin()],
})
```

Create a folder named `icons` in your document `sourceDir` and put all your svg files in it.

All icons will be loaded automatic.

The plugin provides a global component named **`vp-icon`**.

Just enjoy it!

```markdown
<vp-icon name="github" />

<vp-icon color="#3eaf7c" name="vue" />

<vp-icon color="#3eaf7c" name="vue" size="4em"/>
```

[Custom options detail](https://vp-icon.goyfe.com/guide)
