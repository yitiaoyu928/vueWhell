<template>
  <div class="qgy-row" :style="{marginLeft:-gutter/2+'px',marginRight:-gutter/2+'px'}">
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