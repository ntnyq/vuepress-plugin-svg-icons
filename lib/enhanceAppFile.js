/**
 * Load SVG icons data
 */
import('./.svgs-data')
  .then(module => {
    if (typeof window === 'undefined') return false

    const document = window.document
    const svgWrapper = document.createElement('div')
    svgWrapper.innerHTML = module.default
    svgWrapper.style = 'position: absolute;top: -9999px;left: -9999px;width: 0; height: 0;'
    document.body.appendChild(svgWrapper)
  })

/**
 * Regist SVG icon component and inject custom configuration
 */
export default ({ Vue }) => {
  const svgIconOptions = JSON.parse(SVG_ICON_OPTIONS) /* eslint-disable-line no-undef */
  const {
    componentName = 'VpIcon',
    classPrefix = 'vp-icon',
    defaultColor = 'currentColor',
    defaultGutter = 0
  } = svgIconOptions

  Vue.component(componentName, {
    functional: true,

    props: {
      name: {
        type: String,
        required: true
      },

      color: {
        type: String,
        default: ''
      },

      gutter: {
        type: [String, Number],
        default: 0
      }
    },

    render (h, { data, props }) {
      return h(
        'svg', {
          ...data,
          'class': [
            `${classPrefix}`,
            `${classPrefix}-${props.name}`
          ],
          style: {
            width: '1em',
            height: '1em',
            'vertical-align': '-0.15em',
            fill: props.color || defaultColor,
            'margin-left': props.gutter || defaultGutter,
            'margin-right': props.gutter || defaultGutter,
            overflow: 'hidden'
          },
          attrs: {
            'aria-hidden': true
          }
        },
        [
          h('use', {
            attrs: {
              'xlink:href': `#_vp-icon-${props.name}`
            }
          })
        ]
      )
    }
  })
}
