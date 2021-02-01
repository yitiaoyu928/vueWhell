<template>
  <div>
    <div>
      <qgy-tab :selected="selected" :fn="xxx">
        <qgy-tab-item name="a" icon="iconfont icon-loading">1</qgy-tab-item>
        <qgy-tab-item name="b">2</qgy-tab-item>
        <qgy-tab-item name="c">3</qgy-tab-item>
      </qgy-tab>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selected:'b'
    }
  },
  methods: {
    xxx(e,va) {
      console.log(e,va);
    }
  },
};
</script>
<style lang="scss" scoped>

</style>
