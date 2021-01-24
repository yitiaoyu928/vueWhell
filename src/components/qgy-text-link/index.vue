<template>
  <a :href="link" :class="['qgy-link', { [`qgy-${type}`]: true }]">
    <slot> 文字超链接 </slot>
  </a>
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
    link: {
      type: String,
      default: "",
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../../public/style";
.qgy-link {
  text-decoration: none;
  color: $defaultHoverColor;
  &:hover {
    color: $defaultColor;
  }
}
.qgy-primary {
  color: $primaryColor;
  &:hover {
    color: $primaryHoverColor;
  }
}
.qgy-success {
  color: $successColor;
  &:hover {
    color: $successHoverColor;
  }
}
</style>
