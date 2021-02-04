<template>
  <div class="qgy-collapse-item" @click="xxx">
    <div class="collapse-item-wrapper">
      <div class="collapse-content" v-text="title">
      </div>
      <qgy-icon class="icons" :icon="icon" :class="{'trans':!active}"></qgy-icon>
    </div>
    <div class="collapse-item-content" :class="activeClass" v-if="active">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "collapse-item",
  props: {
    title: {
      type: String
    },
    icon: {
      type: String
    },
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      active:false
    }
  },
  inject: ['eventBus'],
  created() {
    this.eventBus.$on('update:selected', (name, vm) => {
      if (this.name === name) {
        this.active = true;
      } else {
        this.active = false;
      }
    })
  },
  methods: {
    xxx() {
      this.eventBus.$emit('update:selected', this.name, this)
    }
  },
  computed:{
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
.qgy-collapse-item {
  display: flex;
  padding: 0.3em 1em;
  flex-direction: column;
  border: 1px solid #999;
  &:first-child {
    border: none;
  }
  &:last-child {
    border: none;
  }
  &:not(:last-child) {
    border-left: none;
    border-right: none;
  }
  .collapse-item-wrapper {
    display: flex;

    .icons {
      margin-left: auto;

      &.trans {
        transform: rotate(-90deg);
      }
    }
  }
  .collapse-item-content {
    &.active {

    }
  }
}

</style>