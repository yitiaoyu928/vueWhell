<template>
  <div class="qgy-layout" :class="layoutClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'layout',
  data() {
    return {
      layoutClass: {
        'has-sider': false
      }
    }
  },
  mounted() {
    this.$children.forEach(item => {
      if (item.$options.name === 'qgy-sider') {
        this.layoutClass['has-sider'] = true;
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.qgy-layout {
  display: flex;
  flex-direction: column;

  &.has-sider {
    flex-direction: row;
  }
}
</style>