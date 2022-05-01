import './style.css'
import { defineClientAppEnhance } from '@vuepress/client'
import { h } from 'vue'
import { type SvgIconPropsOptions } from '../shared'
import { Icon } from './components/Icon'

declare const __SVG_ICON_ID_PREFIX__: string
declare const __SVG_ICON_COMPONENT_NAME__: string
declare const __SVG_ICON_DEFAULT_PROPS_OPTIONS__: SvgIconPropsOptions

const defaultPropsOptions = __SVG_ICON_DEFAULT_PROPS_OPTIONS__

export default defineClientAppEnhance(({ app }) => {
  app.component(__SVG_ICON_COMPONENT_NAME__, props =>
    h(Icon, {
      ...defaultPropsOptions,
      ...props,
      prefix: __SVG_ICON_ID_PREFIX__,
    }),
  )
})
