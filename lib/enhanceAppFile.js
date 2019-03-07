/**
 * Load SVG icons data
 */
import('./.svgs-data')
  .then(module => {
    if (typeof window === 'undefined') return false

    const doc = window.document
    const svgWrapper = doc.createElement('div')
    svgWrapper.innerHTML = module.default || module
    svgWrapper.style = 'position: absolute;top: -9999px;left: -9999px;width: 0; height: 0;'
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
    classPrefix = 'vp-icon',
    defaultColor = 'currentColor',
    defaultGutter = 0
  } = svgIconOptions

  Vue.component(componentName, {
    functional: true,

    /* eslint-disable-next-line vue/require-render-return */
    render (h, { data, props, parent }) {
      const style = {
        width: '1em',
        height: '1em',
        verticalAlign: '-0.15em',
        fill: props.color || defaultColor,
        marginLeft: props.gutter || defaultGutter,
        marginRight: props.gutter || defaultGutter,
        overflow: 'hidden'
      }

      // Hack trick from @vssue/vuepress-plugin-vssue
      if (parent._isMounted) {
        return (
          h(
            'svg',
            {
              ...data,
              'class': [
                `${classPrefix}`,
                `${classPrefix}-${props.name}`
              ],
              style,
              attrs: { 'aria-hidden': true }
            },
            [
              h(
                'use',
                {
                  attrs: { 'xlink:href': `#_vp-icon-${props.name}` }
                }
              )
            ]
          )
        )
      } else {
        parent.$once('hook:mounted', () => {
          parent.$forceUpdate()
        })
      }
    }
  })
}
