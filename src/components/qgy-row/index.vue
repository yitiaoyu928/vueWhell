<template>
  <div class="qgy-row" :style="rowStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "row.vue",
  props: {
    gutter: {
      type: String,
      default: ''
    }
  },
  computed: {
    rowStyle() {
      let {gutter} = this;
      return {
        marginLeft: gutter / 2 + 'px',
        marginRight: gutter / 2 + 'px'
      }
    }
  },
  mounted() {
    if (this.gutter) {
      console.log(this.$children)
      this.$children.forEach(function (Nodes) {
        Nodes.gutter = this.gutter;
      }.bind(this))
    }
  }
}
</script>

<style lang="scss" scoped>
.qgy-row {
  box-sizing: border-box;
  display: flex;
  min-height: 60px;
}
</style>