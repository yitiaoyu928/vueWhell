<template>
  <div>
    <div>
      <qgy-button :loading="loading1" @click="toggle" title="点击我可以查看loading"
        >default</qgy-button
      >
      <qgy-button
        type="primary"
        icon-class="iconfont icon-download"
        icon-direction="right"
        >primary</qgy-button
      >
      <qgy-button
        type="success"
        icon-class="iconfont icon-download"
        icon-direction="right"
        user-class="g-button"
        >success</qgy-button
      >
    </div>
    <div>
      <qgy-link link="http://www.baidu.com" type="primary"></qgy-link>
      <qgy-link link="http://www.baidu.com" type="success"></qgy-link>
      <qgy-link link="http://www.baidu.com"></qgy-link>
    </div>
    <div>
      <qgy-tag>hello</qgy-tag>
      <qgy-tag type="primary">hello</qgy-tag>
      <qgy-tag type="success">hello</qgy-tag>
    </div>
    <div>
      <qgy-switch off-bg-color="#ccc">按钮</qgy-switch>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading1: false,
    };
  },
  methods: {
    toggle() {
      this.loading1 = !this.loading1;
    },
  },
};
</script>
<style lang="scss" scoped>


</style>
