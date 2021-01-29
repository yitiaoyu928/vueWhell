<template>
  <div class="qgy-sider" :style="{width:siderWidth+'px'}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'qgy-sider',
  props:{
    siderWidth:{
      type:[String,Number],
      default:'200'
    }
  }
}
</script>

<style lang="scss" scoped>
.qgy-sider {

}
</style>