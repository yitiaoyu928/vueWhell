<template>
  <div class="qgy-row" :style="rowStyle" :class="rowClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "row.vue",
  props: {
    gutter: {
      type: string,
      default: ''
    },
    align: {
      type: string,
      validator(value) {
        return ['left', 'right', 'center'].indexof(value) !== -1;
      }
    }
  },
  computed: {
    rowstyle() {
      let {gutter} = this;
      return {
        marginleft: gutter / 2 + 'px',
        marginright: gutter / 2 + 'px'
      }
    },
    rowclass() {
      let {align} = this;
      return [
        align && `qgy-row-${align}`
      ]
    }
  },
  mounted() {
    if (this.gutter) {
      console.log(this.$children)
      this.$children.foreach(function (nodes) {
        nodes.gutter = this.gutter;
      }.bind(this))
    }
  }
}
</script>

<style lang="scss" scoped>
.qgy-row {box-sizing: border-box;display: flex;min-height: 60px;
  &-left {justify-content: flex-start;}
  &-right {justify-content: flex-end;}
  &-center {justify-content: center;}
}
</style>