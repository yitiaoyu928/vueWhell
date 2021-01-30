<template>
  <div class="qgy-toast" :class="[position]">
    <span class="message" v-text="message"></span>
    <span class="line"></span>
    <span class="close" v-if="close" @click="hide" v-text="closeText"> </span>
  </div>
</template>

<script>
export default {
  name: "toast",
  props: {
    message: {
      type: String
    },
    close: {
      type: Boolean
    },
    position: {
      type: String,
      default: 'bottom'
    },
    closeText: {
      type: String
    },
    callback: {
      type: Function,
    }
  },
  methods: {
    hide() {
      this.$el.remove();
      this.$destroy();
      this.callback && this.callback();
    }
  }
}
</script>

<style lang="scss" scoped>
$fontSize: 14px;
$height: 30px;
$line-height: $height;
.qgy-toast {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 99999;
  font-size: $fontSize;
  height: $height;
  background-color: rgb(127, 140, 141);
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 1px 3px #404040;
  color: rgb(236, 240, 241);
  text-align: center;
  &.bottom {
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
  }

  &.top {
    left: 50%;
    top: 0;
    transform: translateX(-50%);
  }

  &.center {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .line {
    width: 1px;
    height: 100%;
    margin: 0 5px;
    background-color: rgb(189, 195, 199);
  }
  .message,.close {
    height: 100%;
    line-height: 30px;
  }
  &>.message {
    flex-grow: 9;
  }

  .close {
    flex-grow: 1;
    cursor: pointer;
    min-width:60px;
  }
}
</style>