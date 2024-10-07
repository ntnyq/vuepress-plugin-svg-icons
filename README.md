# vuepress-plugin-svg-icons

[![CI](https://github.com/ntnyq/vuepress-plugin-svg-icons/workflows/CI/badge.svg)](https://github.com/ntnyq/vuepress-plugin-svg-icons/actions)
[![NPM VERSION](https://img.shields.io/npm/v/@goy/vuepress-plugin-svg-icons.svg)](https://www.npmjs.com/package/@goy/vuepress-plugin-svg-icons)
[![NPM DOWNLOADS](https://img.shields.io/npm/dy/@goy/vuepress-plugin-svg-icons.svg)](https://www.npmjs.com/package/@goy/vuepress-plugin-svg-icons)
[![LICENSE](https://img.shields.io/github/license/ntnyq/vuepress-plugin-svg-icons.svg)](https://github.com/ntnyq/vuepress-plugin-svg-icons/blob/main/LICENSE)

:heart: SVG sprite plugin for [VuePress](https://v2.vuepress.vuejs.org)

:book: [Live Demo and Docs](https://vp-icon.ntnyq.com)

## Note

:warning: The latest version since v5 only supports [VuePress v2](https://v2.vuepress.vuejs.org).

If you are looking for VuePress v1 support, please use [@goy/vuepress-plugin-svg-icons@4.3.0](https://www.npmjs.com/package/@goy/vuepress-plugin-svg-icons/v/4.3.0).

## Install

```bash
npm i @goy/vuepress-plugin-svg-icons -D
```

```bash
yarn add @goy/vuepress-plugin-svg-icons -D
```

```bash
pnpm add @goy/vuepress-plugin-svg-icons -D
```

## Usage

```js
import { svgIconPlugin } from '@goy/vuepress-plugin-svg-icons'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  plugins: [svgIconPlugin()],
})
```

Create a folder named `icons` in your document `sourceDir` and put all your svg files in it.

All icons will be loaded automatic.

The plugin provides a global component named **`VpIcon`**.

Just enjoy it! :blush:

```md
<vp-icon name="github" />

<vp-icon color="#3eaf7c" name="vue" />

<vp-icon color="#3eaf7c" name="vue" size="4em"/>
```

[Custom options detail](https://vp-icon.ntnyq.com/guide)

## License

[MIT](./LICENSE) License © 2019-PRESENT [ntnyq](https://github.com/ntnyq)
