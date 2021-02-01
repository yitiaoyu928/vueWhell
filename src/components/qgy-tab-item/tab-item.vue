<template>
  <div class="tab-item" @click="xxx" :class="activeClass">
    <qgy-icon :icon="icon" v-if="icon"></qgy-icon>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "tab-item",
  inject: ['eventBus'],
  props: {
    name: {
      type: String,
      required: true
    },
    icon:{
      type:String,
      default:''
    }
  },
  data() {
    return {
      active: false
    }
  },
  created() {
    this.eventBus.$on('update:selected', (name,vm) => {
      if (this.name === name) {
        this.active = true;
      } else {
        this.active = false;
      }
    })
  },
  methods: {
    xxx() {
      this.eventBus.$emit('update:selected', this.name,this)
    }
  },
  computed: {
    activeClass() {
      if (this.active) {
        return 'active';
      } else {
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
    color: rgb(99, 176, 255, 1);
    font-weight: 600;
  }
}
</style>