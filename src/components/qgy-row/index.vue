<template>
  <div class="qgy-row">
    <slot></slot>
  </div>
</template>

<script>
export default {
name: "row.vue"
}
</script>

<style lang="scss" scoped>
.qgy-row {
  box-sizing: border-box;
  display: flex;
  min-height:60px;
}
</style>