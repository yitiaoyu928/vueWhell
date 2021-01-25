<template>
  <span :class="['qgy-tag',{[`qgy-${type}`]:true},userClass]">
    <slot>标签</slot>
  </span>
</template>
<script>
export default {
  props:{
    userClass:{
      type:String,
      default:''
    },
    type:{
      type:String,
      default:'default',
      validator:function(value) {
        return ['default','primary','success'].indexOf(value)!== -1;
      }
    }
  }
}

</script>
<style lang="scss" scoped>
@import '../../public/style.scss';
.qgy-tag {
  display: inline-block;
  padding: 5px 10px;
  border: 1px solid $defaultColor;
  border-radius: $borderRadius;
  cursor:default;
  &:hover {
    background-color: $defaultColor;
    border: 1px solid $defaultHoverColor;
  }
}
.qgy-primary {
  border: 1px solid $primaryColor;
  &:hover {
    color: #e9e9e9;
    background-color: $primaryColor;
    border: 1px solid $primaryHoverColor;
  }
}
.qgy-success {
  border: 1px solid $successColor;
  &:hover {
    color: #e9e9e9;
    background-color: $successColor;
    border: 1px solid $successHoverColor;
  }
}
</style>