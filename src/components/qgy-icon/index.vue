<template>
  <i :class="[icon]"></i>
</template>

<script>
export default {
  name: "icon",
  props:{
    icon:{
      type:String,
      default:''
    }
  }
}
</script>

<style scoped>

</style>