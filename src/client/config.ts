import './style.css'
import { h } from 'vue'
import { defineClientConfig } from 'vuepress/client'
import { Icon, Sprites } from './components'
import type { SvgIconPropsOptions } from '../shared'
import type { IconProps } from './components'

declare const __SVG_ICON_ID_PREFIX__: string
declare const __SVG_ICON_COMPONENT_NAME__: string
declare const __SVG_ICON_DEFAULT_PROPS_OPTIONS__: SvgIconPropsOptions

const defaultPropsOptions = __SVG_ICON_DEFAULT_PROPS_OPTIONS__

/**
 * Prefix is a constant value
 */
export type IconPropsWithoutPrefix = Omit<IconProps, 'prefix'>

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component(
      __SVG_ICON_COMPONENT_NAME__,
      (props: IconPropsWithoutPrefix) =>
        h(Icon, {
          ...defaultPropsOptions,
          ...props,
          prefix: __SVG_ICON_ID_PREFIX__,
        }),
    )
  },

  rootComponents: [Sprites],
})
