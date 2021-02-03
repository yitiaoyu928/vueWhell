<template>
  <div class="qgy-popover" @click.stop="onClick($event)">
    <div ref="contentWrapper" class="popover-wrapper" v-if="visible" @click.stop
         :class="{[`popover-${direction}`]:true}">
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
  props: {
    direction: {
      type: String,
      default: "top",
      validator(value) {
        return ['top', 'left', 'bottom', 'right'].indexOf(value) !== -1;
      }
    }
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
          this.setElementPosition(this.direction);
          this.elementEvent();
        })
      }

    },
    setElementPosition(direction) {
      console.log(direction)
      document.body.appendChild(this.$refs.contentWrapper);
      let {width, height,top, left} = this.$refs.triggerWrapper.getBoundingClientRect();
      let {clientHeight} = this.$refs.contentWrapper;
      this.$refs.contentWrapper.style.left = left + window.scrollX + 'px';
      this.$refs.contentWrapper.style.top = top + window.scrollY + 'px';
      switch (direction) {
        case "top":
          this.$refs.contentWrapper.style.left = left + window.scrollX + 'px';
          this.$refs.contentWrapper.style.top = top + window.scrollY + 'px';
          break;
        case "bottom":
          this.$refs.contentWrapper.style.left = left + window.scrollX + 'px';
          this.$refs.contentWrapper.style.top = top+clientHeight+height +  window.scrollY + 'px';
          break;
        case "left":
          this.$refs.contentWrapper.style.left = left + window.scrollX + 'px';
          this.$refs.contentWrapper.style.top = top + window.scrollY + 'px';
          break;
        case "right":
          this.$refs.contentWrapper.style.left = left + width + window.scrollX + 'px';
          this.$refs.contentWrapper.style.top = top + clientHeight + window.scrollY + 'px';
          break;
      }
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

  &.popover-top {
    margin-top: -10px;
    &::before, &::after {
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

  &.popover-bottom {
    margin-top: 14px;
    &::before, &::after {
      content: '';
      width: 0;
      height: 0;
      position: absolute;
      left: 10px;
      border: 10px solid transparent;
    }

    &::before {
      bottom: calc(100% + 1px);
      border-bottom: 10px solid #999;
    }

    &::after {
      bottom: 100%;
      border-bottom: 10px solid #fff;
    }
  }

  &.popover-left {
    margin-left: -10px;
    transform: translateX(-100%);
    &::before, &::after {
      content: '';
      width: 0;
      height: 0;
      top: 10px;
      position: absolute;
      border: 10px solid transparent;
    }

    &::before {
      left: calc(100% + 1px);
      border-left: 10px solid #999;
    }

    &::after {
      left: 100%;
      border-left: 10px solid #fff;
    }
  }

  &.popover-right {
    margin-left: 10px;
    &::before, &::after {
      content: '';
      width: 0;
      height: 0;
      top: 10px;
      position: absolute;
      border: 10px solid transparent;
    }

    &::before {
      right: calc(100% + 1px);
      border-right: 10px solid #999;
    }

    &::after {
      right: 100%;
      border-right: 10px solid #fff;
    }
  }
}
</style>