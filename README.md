# Vuepress Plugin - SvgIcons

[![CIRCLECI](https://img.shields.io/circleci/project/ntnyq/vuepress-plugin-svg-icons/master.svg?logo=circleci)](https://circleci.com/gh/ntnyq/vuepress-plugin-svg-icons)
[![NPM VERSION](https://img.shields.io/npm/v/@goy/vuepress-plugin-svg-icons.svg)](https://www.npmjs.com/package/@goy/vuepress-plugin-svg-icons)
[![NPM DOWNLOADS](https://img.shields.io/npm/dy/@goy/vuepress-plugin-svg-icons.svg)](https://www.npmjs.com/package/@goy/vuepress-plugin-svg-icons)
[![LICENSE](https://img.shields.io/github/license/ntnyq/vuepress-plugin-svg-icons.svg)](https://github.com/ntnyq/vuepress-plugin-svg-icons/blob/master/LICENSE)

:heart: Svg sprite plugin for [Vuepress](https://vuepress.vuejs.org)

:book: [Live Demo and Docs](https://vp-icon.goyfe.com)

## Install

``` bash
$ npm install @goy/vuepress-plugin-svg-icons
# OR
$ yarn add @goy/vuepress-plugin-svg-icons
```

# Usage

You can use __vuepress-plugin-svg-icons__ in __themes__ and __plugins__ wherever you like.

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

``` markdown
<vp-icon  name="github" />

<vp-icon color="#3eaf7c"  name="vue" />
```

[Custom options detail](https://vp-icon.goyfe.com/guide)
