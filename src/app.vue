<template>
  <div>
    <qgy-collapse :selected="selected">
      <qgy-collapse-item title="这是一个标题" icon="iconfont icon-arrow" name="111">
        内容1
      </qgy-collapse-item>
      <qgy-collapse-item title="test标题" icon="iconfont icon-arrow" name="222">
        内容1
      </qgy-collapse-item>
      <qgy-collapse-item title="test标题2" icon="iconfont icon-arrow" name="333">
        内容1
      </qgy-collapse-item>
    </qgy-collapse>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selected: '111'
    }
  },
  methods: {

  },
};
</script>
<style lang="scss" scoped>

</style>
