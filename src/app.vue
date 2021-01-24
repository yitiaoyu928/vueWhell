<template>
  <div>
    <div>
      <qgy-button :loading="loading1" @click="toggle">default</qgy-button>
      <qgy-button
        type="primary"
        icon-class="iconfont icon-download"
        icon-direction="right"
        :loading="loading1"
        @click="toggle"
        >primary</qgy-button
      >
      <qgy-button
        type="success"
        icon-class="iconfont icon-download"
        icon-direction="right"
        >success</qgy-button
      >
    </div>
    <div>
      <qgy-link link="http://www.baidu.com" type="primary"></qgy-link>
      <qgy-link link="http://www.baidu.com" type="success"></qgy-link>
      <qgy-link link="http://www.baidu.com"></qgy-link>
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
<style lang="scss" scoped></style>
