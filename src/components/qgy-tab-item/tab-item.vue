<template>
<div class="tab-item" @click="xxx" :class="activeClass">
  <slot></slot>
</div>
</template>

<script>
export default {
  name: "tab-item",
  inject:['eventBus'],
  props:{
    name:{
      type:String,
      required:true
    }
  },
  data() {
    return {
      active:false
    }
  },
  created() {
   this.eventBus.$on('update:selected',(name)=>{
      if(this.name === name) {
        this.active=true;
      }else {
        this.active = false;
      }
   })
  },
  methods:{
    xxx() {
      this.eventBus.$emit('update:selected',this.name)
    }
  },
  computed: {
    activeClass() {
      if(this.active) {
        return 'active';
      }else {
        return '';
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.tab-item {
  flex-shrink: 0;
  padding: 0 2rem;
  cursor: pointer;
  &.active {
    border-bottom: 1px solid lightblue;
  }
}
</style>