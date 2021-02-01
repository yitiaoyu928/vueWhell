<template>
  <div>
    <div>
      <qgy-tab :selected.sync="selected" @update:selected="xxx">
        <qgy-tab-item name="p" icon="iconfont icon-loading">1</qgy-tab-item>
        <qgy-tab-item name="x">2</qgy-tab-item>
        <qgy-tab-item name="c">3</qgy-tab-item>
      </qgy-tab>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selected:'p'
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
