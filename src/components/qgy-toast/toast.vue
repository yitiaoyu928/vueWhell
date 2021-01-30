<template>
  <div class="box" :class="[position]">
    <div class="qgy-toast" :class="{'full':full}">
      <span class="message" v-text="message"></span>
      <span class="line" ref="line"></span>
      <span class="close" v-if="close" @click="hide" v-text="closeText" ref="close"></span>
    </div>
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
    full: {
      type: Boolean
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
$animation-time:300ms;
//属性名含有bottom动画
@keyframes fade-slide-up {
  0% {
    transform: translateY(100px);
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
//属性名含有top动画
@keyframes fade-slide-down {
  0% {
    transform: translateY(-100px);
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
//属性名含有middle动画
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.box {
  position: fixed;
  z-index: 99999;
  left: 50%;
  transform: translateX(-50%);
  &.bottom {
    bottom: 0;
    .qgy-toast {
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;
      animation: fade-slide-up $animation-time;
    }
  }

  &.top {
    top: 0;
    .qgy-toast {
      border-top-left-radius: 0px;
      border-top-right-radius: 0px;
      animation: fade-slide-down $animation-time;
    }
  }

  &.middle {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: fade-in $animation-time;
  }
}

.qgy-toast {
  &.full {
    width: 100%;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: $fontSize;
  min-height: 30px;
  line-height: 1.5;
  background-color: rgb(127, 140, 141);
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 1px 3px #404040;
  color: rgb(236, 240, 241);
  text-align: center;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -ms-backface-visibility: hidden;
  backface-visibility: hidden;
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