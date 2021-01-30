<template>
  <div class="qgy-toast" :class="[position,{'full':full}]">
    <span class="message" v-text="message"></span>
    <span class="line" ref="line"></span>
    <span class="close" v-if="close" @click="hide" v-text="closeText" ref="close"></span>
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
      default: 'bottom',
      validator(value) {
        return ['top', 'middle', 'bottom'].indexOf(value) !== -1;
      }
    },
    closeText: {
      type: String
    },
    callback: {
      type: Function,
    },
    full:{
      type:Boolean
    }
  },
  methods: {
    hide() {
      this.$el.remove();
      this.$destroy();
      this.callback && this.callback();
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.line.style.height = this.$el.getBoundingClientRect().height + 'px';
      this.$refs.close.style.height = this.$el.getBoundingClientRect().height + 'px';
      this.$refs.close.style.lineHeight = this.$el.getBoundingClientRect().height + 'px';
    });
  }
}
</script>

<style lang="scss" scoped>
$fontSize: 14px;
.qgy-toast {
  &.full  {
    width: 100%;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 99999;
  font-size: $fontSize;
  min-height: 30px;
  line-height: 1.5;
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

  &.middle {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .line {
    border-left: 1px solid #ccc;
    margin: 0 5px;
    background-color: rgb(189, 195, 199);
  }

  .message {
    padding: 3px 10px;
    flex-grow: 9;
  }

  .close {
    flex-grow: 1;
    cursor: pointer;
    min-width: 60px;
  }
}

</style>