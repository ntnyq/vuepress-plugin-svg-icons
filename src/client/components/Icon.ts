import { defineComponent, h } from 'vue'
import type { ExtractPropTypes } from 'vue'

export const iconProps = {
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
    required: true,
  },
} as const

export type IconProps = ExtractPropTypes<typeof iconProps>

export const Icon = defineComponent({
  props: {
    ...iconProps,
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
        h('use', { 'xlink:href': `#${props.prefix + props.name}` }),
      )
  },
})
