<template>
  <div class="qgy-toast" :class="[position]">
  <span class="message" v-text="message">
<!--    <slot></slot>-->

  </span>
    <span class="close" v-if="close" @click="hide">
    关闭
  </span>
  </div>
</template>

<script>
export default {
  name: "toast",
  props:{
    message:{
      type:String
    },
    close:{
      type:Boolean
    },
    position:{
      type:String,
      default:'bottom'
    }
  },
  methods:{
    hide() {
     this.$el.remove()
    }
  }
}
</script>

<style lang="scss" scoped>
.qgy-toast {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index:99999;
  height: 30px;
  border: 1px solid red;
  &.bottom {
    left: 50%;
    bottom: 0;
    transform:translateX(-50%);
  }
  &.top {
    left: 50%;
    top: 0;
    transform:translateX(-50%);
  }
  &.center {
    top: 50%;
    left: 50%;
    transform:translate(-50%,-50%);
  }
  .message,.close {
    text-align: center;
  }
  .message {
    flex-grow: 9;

  }
  .close {
    flex-grow:1;
  }
}
</style>