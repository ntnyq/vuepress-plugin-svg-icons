import { SVGIconsData } from '@vuepress/plugin-svg-icons/data'
import { defineComponent, h } from 'vue'

export const Sprites = defineComponent({
  name: 'VpIconSprites',

  setup() {
    return () =>
      h('div', {
        style: 'display: none;',
        'data-name': '__VUEPRESS_PLUGIN_SVG_ICONS__',
        innerHTML: SVGIconsData,
      })
  },
})

export default Sprites
