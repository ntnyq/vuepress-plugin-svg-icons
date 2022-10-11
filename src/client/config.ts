import './style.css'
import { defineClientConfig } from '@vuepress/client'
import { h } from 'vue'
import type { SvgIconPropsOptions } from '../shared/index.js'
import { Icon, Sprites } from './components/index.js'

declare const __SVG_ICON_ID_PREFIX__: string
declare const __SVG_ICON_COMPONENT_NAME__: string
declare const __SVG_ICON_DEFAULT_PROPS_OPTIONS__: SvgIconPropsOptions

const defaultPropsOptions = __SVG_ICON_DEFAULT_PROPS_OPTIONS__

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component(__SVG_ICON_COMPONENT_NAME__, props => h(Icon, {
      ...defaultPropsOptions,
      ...props,
      prefix: __SVG_ICON_ID_PREFIX__,
    }))
  },

  rootComponents: [Sprites],
})
