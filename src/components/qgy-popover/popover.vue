<template>
  <div class="qgy-popover" @click="xxx">
    <div class="popover-wrapper" v-if="visible">
      <slot name="content">这是popover的内容部分</slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "popover",
  data() {
    return {
      visible: false
    }
  },
  methods: {
    xxx() {
      this.visible = !this.visible;
      if (this.visible === true) {
       setTimeout(() => {
          let eventHandle = () => {
            this.visible = false;
            document.removeEventListener("click", eventHandle)
          }
          document.addEventListener("click", eventHandle);
        })

      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>