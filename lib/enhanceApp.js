import './style.styl'

/**
 * Load svg icons data
 */
import('@dynamic/svg-icons-data')
  .then(module => {
    if (typeof window === 'undefined') return false

    const doc = window.document
    const svgWrapper = doc.createElement('div')

    svgWrapper.setAttribute('data-plugin-name', '__VUEPRESS_PLUGIN_SVG_ICONS__')
    svgWrapper.setAttribute('style', 'display: none;')
    svgWrapper.innerHTML = module.default || module
    doc.body.appendChild(svgWrapper)
  })

/**
 * Regist svg icon component and inject custom configuration
 */
export default ({ Vue }) => {
  /* eslint-disable-next-line no-undef */
  const svgIconOptions = JSON.parse(SVG_ICON_OPTIONS)
  const {
    iconIdPrefix = 'vp_icon_',
  } = svgIconOptions

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
    },

    /* eslint-disable-next-line vue/require-render-return */
    render (h, { data, props, parent }) {
      // Hack trick from @vssue/vuepress-plugin-vssue
      if (parent._isMounted) {
        return h('svg', {
          ...data,
          style: { fill: props.color },
          attrs: { 'aria-hidden': 'true' },
          class: ['vp-icon', `vp-icon-${props.name}`],
        }, [h('use', {
          attrs: { 'xlink:href': `#${iconIdPrefix + props.name}` },
        })])
      } else {
        parent.$once('hook:mounted', () => {
          parent.$forceUpdate()
        })
      }
    },
  })
}
