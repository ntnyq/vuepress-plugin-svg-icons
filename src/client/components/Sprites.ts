import { defineComponent, h } from 'vue'
// @ts-expect-error temp module
import { SVGIconData } from '@vuepress/plugin-svg-icons/temp'

export const Sprites = defineComponent({
  name: 'VpIconSprites',

  setup() {
    return () =>
      h('div', {
        style: 'display: none;',
        'data-name': '__VUEPRESS_PLUGIN_SVG_ICONS__',
        innerHTML: SVGIconData,
      })
  },
})

export default Sprites
