<template>
  <div class="qgy-tab" :class="[direction]">
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue';
export default {
  name: "tab",
  props:{
    direction:{
      type:String,
      default:"horizontal"
    },
    selected:{
      type:String,
      required:true
    }
  },
  data() {
    return {
      eventBus:new Vue()
    }
  },
  provide() {
    return {
      eventBus:this.eventBus
    }
  },
  mounted() {
    this.eventBus.$emit('update:selected',this.selected);
  }
}
</script>

<style lang="scss" scoped>
.qgy-tab {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  &.horizontal {
    flex-direction: row;
  }
  &.vertical {
    flex-direction: column;
  }
}

</style>