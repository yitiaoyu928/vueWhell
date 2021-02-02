<template>
  <div class="qgy-popover" @click.stop="onClick($event)">
    <div ref="contentWrapper" class="popover-wrapper" v-if="visible" @click.stop>
      <slot name="content">这是popover的内容部分</slot>
    </div>
    <span ref="triggerWrapper">
      <slot></slot>
   </span>
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
    onClick(event) {
      if (this.$refs.triggerWrapper.contains(event.target)) {
        this.visible = !this.visible;
        if (this.visible === true) {
          setTimeout(() => {
            this.setElementPosition();
            this.elementEvent();
          })
        }
      }
    },
    setElementPosition() {
      document.body.appendChild(this.$refs.contentWrapper);
      let {width, height, top, left} = this.$refs.triggerWrapper.getBoundingClientRect();
      this.$refs.contentWrapper.style.left = left + 'px';
      this.$refs.contentWrapper.style.top = top + 'px';
    },
    elementEvent() {
      let eventHandle = () => {
        this.visible = false;
        document.removeEventListener("click", eventHandle)
      }
      document.addEventListener("click", eventHandle);
    }
  }
}
</script>

<style lang="scss" scoped>
.qgy-popover {
  position: relative;
  display: inline-block;
}

.popover-wrapper {
  position: absolute;
  -webkit-transform: translateY(-100%);
  -moz-transform: translateY(-100%);
  -ms-transform: translateY(-100%);
  -o-transform: translateY(-100%);
  transform: translateY(-100%);
}
</style>