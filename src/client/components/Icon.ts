import { defineComponent, h } from 'vue'

export const Icon = defineComponent({
  name: 'VpIcon',

  props: {
    name: {
      type: String,
      required: true,
    },

    color: {
      type: String,
    },

    size: {
      type: String,
    },

    prefix: {
      type: String,
    },
  },

  setup(props) {
    return () =>
      h(
        'svg',
        {
          'aria-hidden': 'true',
          class: ['vp-icon', `vp-icon-${props.name}`],
          style: { fill: props.color, fontSize: props.size },
        },
        [h('use', { 'xlink:href': `#${props.prefix + props.name}` })],
      )
  },
})
