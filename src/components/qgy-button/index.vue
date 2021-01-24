<template>
  <button :class="['qgy-button', { [`qgy-${type}`]: true }]" @click="$emit('click')">
    <i
      :class="['qgy-i', iconClass, { [`icon-${iconDirection}`]: true }]"
      v-if="!loading"
    ></i>
    <i
      :class="[
        'qgy-i iconfont icon-loading',
        'loading-animation',
        { [`icon-${iconDirection}`]: true },
      ]"
      v-else="loading"
    ></i>
    <span class="qgy-span">
      <slot>button</slot>
    </span>
  </button>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: "default",
      validator: function (value) {
        return ["default", "primary", "success"].indexOf(value) !== -1;
      },
    },
    iconClass: {
      type: String,
      default: "",
    },
    iconDirection: {
      type: String,
      default: "left",
      validator: function (value) {
        return ["left", "right"].indexOf(value) !== -1;
      },
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../../public/style.scss";

.qgy-button {
  border: none;
  border-radius: $borderRadius;
  border: 1px solid $defaultHoverColor;
  overflow: hidden;
  font-size: $fontSize;
  padding: 5px 15px;
  cursor: pointer;
  vertical-align: middle;
  line-height: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: $defaultColor;
    border: 1px solid $defaultHoverColor;
  }

  &:active {
    color: #fff;
  }

  &:focus {
    outline: none;
  }

  .qgy-i {
    vertical-align: middle;
    margin: 0 2px;
  }

  .icon-left {
    order: 1;
  }

  .icon-right {
    order: 2;
  }
  .qgy-span {
    order: 1;
  }
  .loading-animation {
    animation: loadings 1s infinite linear;
  }
  @keyframes loadings {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
.qgy-primary {
  background-color: $primaryColor;
  border: 1px solid $primaryColor;
  color: #eee;
  &:hover {
    background-color: $primaryHoverColor;
    border: 1px solid $primaryHoverColor;
  }
}
.qgy-success {
  background-color: $successColor;
  border: 1px solid $successColor;
  color: #eee;
  &:hover {
    background-color: $successHoverColor;
    border: 1px solid $successHoverColor;
  }
}
</style>
