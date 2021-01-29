<template>
  <div class="qgy-content" :style="{minHeight:contentHeight+'px'}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'qgy-content',
  props:{
    contentHeight:{
      type:[String,Number],
      default:'400'
    }
  }
}
</script>

<style lang="scss" scoped>
.qgy-content {
  flex-grow: 1;
}
</style>