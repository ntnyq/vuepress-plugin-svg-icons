<template>
  <div class="vp-icon-demo">
    <ul class="icon-list">
      <li
        :style="`background-color: ${ bgc ? icon.color : '' }`"
        v-for="(icon, idx) in icons"
        :key="idx"
        :class="{
          'icon-item': true,
          'has-shadow': bgc,
          'is-round': round
        }"
      >
        <vp-icon
          :name="icon.name"
          :color="`${ color || (bgc ? '#fff' : icon.color) }`"
        />
      </li>
    </ul>
  </div>
</template>

<script>
const icons = [
  { name: 'bai-yang', color: '#635bee' },
  { name: 'chu-nv', color: '#80ad9d' },
  { name: 'jin-niu', color: '#da8335' },
  { name: 'ju-xie', color: '#8a5ecf' },
  { name: 'mo-jie', color: '#59a346' },
  { name: 'she-shou', color: '#b856b7' },
  { name: 'shi-zi', color: '#e6b300' },
  { name: 'shuang-yu', color: '#ed4b8e' },
  { name: 'shuang-zi', color: '#3da085' },
  { name: 'shui-ping', color: '#3097f5' },
  { name: 'tian-cheng', color: '#317bf3' },
  { name: 'tian-xie', color: '#d64f7e' },
]

export default {
  name: 'VpIconDemo',

  props: {
    bgc: {
      type: Boolean,
      default: false,
    },

    round: {
      type: Boolean,
      default: false,
    },

    color: {
      type: String,
      default: '',
    },
  },

  data () {
    return {
      icons,
    }
  },
}
</script>

<style lang="stylus">
.vp-icon-demo
  padding 20px 0

  .icon
    &-list
      display flex
      flex-wrap wrap
      justify-content center
      align-items center
      padding-left 0
      list-style none

    &-item
      padding 8px
      margin 10px
      border-radius 4px
      line-height 1
      font-size 40px

      &.has-shadow
        box-shadow 0 2px 4px rgba(0, 0, 0, 0.15)

      &.is-round
        border-radius 50%
</style>
