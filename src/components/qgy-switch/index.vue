<template>
  <div :class="['qgy-switch',{[`qgy-${type}`]:true}]" :style="{backgroundColor:!cuts?bgColor:offBgColor}" @click="cut">
    <span v-show="cuts" class="off" :style="{color:fontColor}">off</span>
    <div :class="['ball',{'switch-off':cuts},{'switch-on':!cuts}]" :style="{backgroundColor:ballColor}"></div>
    <span v-show="!cuts" class="on" :style="{color:fontColor}">on</span>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'default',
      validator: function (value) {
        return ['default', 'primary', 'success']
      }
    },
    bgColor: {
      type: String,
      default: ''
    },
    offBgColor: {
      type: String,
      default: ''
    },
    ballColor: {
      type: String,
      default: 'rgb(99,176,255,1)'
    },
    fontColor: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      cuts: false
    }
  },
  methods: {
    cut() {
      this.cuts = !this.cuts;
    }
  }
}
</script>

<style lang="scss" scoped>
.qgy-switch {
  width: 68px;
  height: 20px;
  line-height: 30px;
  border: 1px solid #ccc;
  border-radius: 25px;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  .ball {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    position: absolute;
    transition: all 0.3s;
  }

  .switch-off {
    left: 0;
  }

  .switch-on {
    left: 70%;
  }

  .off, .on {
    font-size: 12px;
    position: absolute;
    top: -5px;
    cursor: default;
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-select: none;
  }

  .on {
    left: 5px;
  }

  .off {
    right: 5px;
  }
}
</style>