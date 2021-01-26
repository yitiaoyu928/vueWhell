<template>
  <label :for="name" :class="['qgy-input',{'error':error},{'success':success}]">
    <span v-text="text"></span>
    <input :type="type"
           :id="name"
           :name="name"
           :value="value"
           :disabled="disabled"
           :readonly="readOnly"
           @change="$emit('change',$event.target.value)"
           @input="$emit('input',$event.target.value)"
           @focus="$emit('focus',$event.target.value)"
           @blur="$emit('blur',$event.target.value)">
    <template v-if="error">
      <qgy-icon icon="iconfont icon-point" class="err"></qgy-icon>
      <span v-text="errorMessage" class="err"></span>
    </template>
    <template v-if="success && !error">
      <qgy-icon icon="iconfont icon-point" class="suc"></qgy-icon>
      <span v-text="successMessage" class="suc"></span>
    </template>
  </label>
</template>

<script>
export default {
  name: "qgy-input",
  props: {
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    success:{
      type:Boolean,
      default:false
    },
    successMessage:{
      type:String,
      default:''
    },
    error: {
      type: Boolean,
      default: false
    },
    errorMessage:{
      type:String,
      default:''
    },
    disabled:{
      type:Boolean,
      default:false
    },
    readOnly:{
      type:Boolean,
      default:false
    },
    value:{
      type:[Number,String],
      default:''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../public/style.scss';

.qgy-input {display: inline-flex;justify-content: center;align-items: center;
  >input:disabled {background-color: #eee;color: #ccc;}
  &.error {
    > input {border: 1px solid #f43;}
    .err {color:#f43; &:nth-of-type(1) {margin: 0 3px;} } }
  &.success {
    >input  {border: 1px solid $successColor;}
  .suc {color: $successColor; &:nth-of-type(1) {margin: 0 3px;} } }
  > span {line-height: 30px;}
  > input {border-radius: 5px;height: 30px;border: 1px solid $defaultColor;font-size: 14px;outline: none;overflow: hidden;padding: 5px 0 5px 8px;
    &:focus {border: 1px solid $defaultHoverColor;box-shadow: 0 0 1px $defaultHoverColor inset;}
  }
}


</style>