<template>
  <div class="qgy-progress">
    <div class="mask" :style="{width:percentage+'%'}" :class="{[`qgy-${type}`]:true}">
      <span class="qgy-text">{{ percentage + '%' }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-progress",
  props: {
    percentage: {
      type: [String, Number],
      default: '0'
    },
    type: {
      type: String,
      default: 'default',
      validator(value) {
        return ['default', 'primary', 'success'].indexOf(value) !== -1;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../public/style.scss';

.qgy-progress {
  height: 20px;
  border-radius: 15px;
  overflow: hidden;
  position: relative;

  .mask {
    position: absolute;
    top: 0;
    height: 100%;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    transition: width 0.5s ease;
    $class-prefix: qgy-;

    &.#{$class-prefix}default {
      background-color: $gray;
    }

    &.#{$class-prefix}primary {
      background-color: $primaryHoverColor;
    }

    &.#{$class-prefix}success {
      background-color: $successHoverColor;
    }

    .qgy-text {
      color: #fff;
      position: absolute;
      right: 3%;
    }
  }

}
</style>