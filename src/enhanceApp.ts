import './style.styl'
import { EnhanceApp } from 'vuepress-types'
import type { SvgIconsPluginOptions } from '.'
// @ts-expect-error virtual modules
import { svgIconsData, svgIconsOptions } from '@dynamic/svg-icons'

const enhanceApp: EnhanceApp = ({ Vue }) => {
  const { iconIdPrefix = `vp_icon_` } = svgIconsOptions as SvgIconsPluginOptions

  if (typeof window === 'undefined') return

  const doc = window.document
  const svgWrapper = doc.createElement(`div`)

  svgWrapper.setAttribute(`data-plugin-name`, `__VUEPRESS_PLUGIN_SVG_ICONS__`)
  svgWrapper.setAttribute(`style`, `display: none;`)
  svgWrapper.innerHTML = svgIconsData
  doc.body.appendChild(svgWrapper)

  Vue.component('VpIcon', {
    functional: true,

    props: {
      name: {
        type: String,
        required: true,
      },

      color: {
        type: String,
        default: undefined,
      },

      size: {
        type: String,
        default: undefined,
      },
    },

    render(h, { data, props, parent }) {
      // Hack trick from @vssue/vuepress-plugin-vssue
      // @ts-expect-error private property
      if (parent._isMounted) {
        return h(
          `svg`,
          {
            ...data,
            style: { fill: props.color, fontSize: props.size },
            attrs: { 'aria-hidden': `true` },
            class: ['vp-icon', `vp-icon-${props.name}`],
          },
          [
            h(`use`, {
              attrs: { 'xlink:href': `#${iconIdPrefix + props.name}` },
            }),
          ]
        )
      } else {
        parent.$once(`hook:mounted`, () => {
          parent.$forceUpdate()
        })
        return h()
      }
    },
  })
}

module.exports = enhanceApp
