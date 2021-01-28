<template>
  <div :class="['qgy-col',{[`col-${span}`]:span},offset && `offset-${offset}`]"
       :style="colStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "cols",
  props: {
    span: {
      type: [String, Number],
      default: function (value) {
        if (value) {
          return '24';
        } else {
          return value;
        }
      }
    },
    offset: {
      type: [String, Number],
      default: ''
    }
  },
  data() {
    return {
      gutter: 0
    }
  },
  computed: {
    colStyle() {
      let {gutter} = this;
      return {
        paddingLeft: gutter / 2 + 'px',
        paddingRight: gutter / 2 + 'px'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../public/style.scss';
</style>