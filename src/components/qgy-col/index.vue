<template>
  <div :class="['qgy-col',{[`col-${span}`]:span}]">
    <slot></slot>
  </div>
</template>

<script>
export default {
name: "cols",
  props:{
    span:{
      type:[String,Number],
      default:function(value) {
          if(value) {
            return '24';
          }else {
            return value;
          }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .qgy-col {
    border: 1px solid #55a532;
    $class-prefix:col-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width:($n/24)*100%;
      }
    }
  }
</style>