<template>
  <div style="-webkit-transform: translate(200px,200px);-moz-transform: translate(200px,200px);-ms-transform: translate(200px,200px);-o-transform: translate(200px,200px);transform: translate(200px,200px);">
    <qgy-popover direction="top">
      <template #content>
        <div>hello world</div>
      </template>
      <button>click Me</button>
    </qgy-popover>
    <qgy-popover direction="bottom">
      <template #content>
        <div>hello world</div>
      </template>
      <button>click Me</button>
    </qgy-popover>
    <qgy-popover direction="left">
      <template #content>
        <div>hello world</div>
      </template>
      <button>click Me</button>
    </qgy-popover>
    <qgy-popover direction="right">
      <template #content>
        <div>hello world</div>
      </template>
      <button>click Me</button>
    </qgy-popover>
  </div>
</template>
<script>
export default {
  data() {
    return {
    }
  },
  methods: {

  },
};
</script>
<style lang="scss" scoped>

</style>
