<template>
  <div class="qgy-popover" @click.stop="onClick($event)">
    <div ref="contentWrapper" class="popover-wrapper" v-if="visible" @click.stop>
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper">
      <slot></slot>
   </span>
  </div>
</template>

<script>
export default {
  name: "popover",
  props:{

  },
  data() {
    return {
      visible: false
    }
  },
  methods: {
    onClick(event) {
      this.visible = !this.visible;
      if (this.visible === true) {
        setTimeout(() => {
          this.setElementPosition();
          this.elementEvent();
        })
      }

    },
    setElementPosition() {
      document.body.appendChild(this.$refs.contentWrapper);
      let {width, height, top, left} = this.$refs.triggerWrapper.getBoundingClientRect();
      this.$refs.contentWrapper.style.left = left + window.scrollX + 'px';
      this.$refs.contentWrapper.style.top = top + window.scrollY + 'px';
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
  border: 1px solid #999;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  padding: 0.5em 1em;
  margin-top: -10px;
  background-color: #fff;
  -webkit-transform: translateY(-100%);
  -moz-transform: translateY(-100%);
  -ms-transform: translateY(-100%);
  -o-transform: translateY(-100%);
  transform: translateY(-100%);

  &::before,&::after {
    content: '';
    width: 0;
    height: 0;
    position: absolute;
    left: 10px;
    border: 10px solid transparent;
  }
  &::before {
    top: calc(100% + 1px);
    border-top: 10px solid #999;
  }
  &::after {
    top: 100%;
    border-top: 10px solid #fff;
  }
}
</style>