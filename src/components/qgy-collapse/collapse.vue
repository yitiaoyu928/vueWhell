<template>
  <div class="qgy-collapse">
    <slot></slot>
  </div>
</template>

<script>
export default {
name: "collapse"
}
</script>

<style lang="scss" scoped>
.qgy-collapse {
  margin-top: -1px;
  margin-left: -1px;
  margin-right: -1px;
  border: 1px solid red;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
}
</style>