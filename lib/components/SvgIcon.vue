<template>
  <svg v-bind="attrs">
    <use :xlink:href="`#${iconIdPrefix + name}`" />
  </svg>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },

    color: {
      type: String,
      default: undefined,
    },

    gutter: {
      type: [Number, String],
      default: undefined,
    },

    iconIdPrefix: {
      type: String,
      default: undefined,
    },

    iconClassPrefix: {
      type: String,
      default: undefined,
    },

    iconCommonClass: {
      type: String,
      default: undefined,
    },
  },

  computed: {
    attrs () {
      const style = {
        width: '1em',
        height: '1em',
        verticalAlign: '-0.15em',
        fill: this.color,
        marginLeft: this.gutter,
        marginRight: this.gutter,
        overflow: 'hidden',
      }
      return ({
        style,
        'aria-hidden': 'true',
        class: [this.iconCommonClass, this.iconClassPrefix + this.name],
      })
    },
  },
}
</script>
