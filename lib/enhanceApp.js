import SvgIcon from './components/SvgIcon.vue'

/**
 * Load SVG icons data
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
 * Regist SVG icon component and inject custom configuration
 */
export default ({ Vue }) => {
  /* eslint-disable-next-line no-undef */
  const svgIconOptions = JSON.parse(SVG_ICON_OPTIONS)
  const {
    componentName = 'VpIcon',
    iconIdPrefix = 'vp_icon_',
    iconClassPrefix = 'vp-icon-',
    iconCommonClass = 'vp-icon',
    defaultColor,
    defaultGutter,
  } = svgIconOptions

  Vue.component(componentName, {
    functional: true,

    props: {
      name: {
        type: String,
        required: true,
      },

      color: {
        type: String,
        default: defaultColor || 'currentColor',
      },

      gutter: {
        type: [Number, String],
        default: defaultGutter || 0,
      },
    },

    /* eslint-disable-next-line vue/require-render-return */
    render (h, { data, props, parent }) {
      // Hack trick from @vssue/vuepress-plugin-vssue
      if (parent._isMounted) {
        return h(SvgIcon, {
          ...data,
          props: {
            ...props,
            iconIdPrefix,
            iconClassPrefix,
            iconCommonClass,
          },
        })
      } else {
        parent.$once('hook:mounted', () => {
          parent.$forceUpdate()
        })
      }
    },
  })
}
