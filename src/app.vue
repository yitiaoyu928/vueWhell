<template>
  <div>
    <div>
      <qgy-button :loading="loading1" @click="toggle" title="点击我可以查看loading"
      >default
      </qgy-button
      >
      <qgy-button
          type="primary"
          icon-class="iconfont icon-download"
          icon-direction="right"
      >primary
      </qgy-button
      >
      <qgy-button
          type="success"
          icon-class="iconfont icon-download"
          icon-direction="right"
          user-class="g-button"
      >success
      </qgy-button
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
      <qgy-switch off-bg-color="#ccc"></qgy-switch>
    </div>
    <div>
      <qgy-input name="qgy" text="禁止修改" disabled value="七个鱼"></qgy-input>
      <qgy-input name="sss" text="只读" read-only value="Seven fish"></qgy-input>
      <qgy-input name="qgy" text="错误" :error="true" error-message="信息错误"></qgy-input>
      <qgy-input name="qgy" text="正确" v-model="text" :success="true" success-message="信息正确"></qgy-input>
      <p>这是v-model数据测试：{{ text }}</p>
      <button v-on:click="changeInp">改变text</button>
    </div>
    <div>
      <qgy-row gutter="10">
        <qgy-col span="12"></qgy-col>
        <qgy-col span="10"></qgy-col>
        <qgy-col span="2"></qgy-col>
      </qgy-row>
      <qgy-row>
        <qgy-col span="4" offset="2"></qgy-col>
        <qgy-col span="10" offset="8"></qgy-col>
      </qgy-row>
      <qgy-row gutter="5">
        <qgy-col span="4" offset="6"></qgy-col>
        <qgy-col span="6" offset="8"></qgy-col>
      </qgy-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading1: false,
      text: "hi"
    };
  },
  methods: {
    toggle() {
      this.loading1 = !this.loading1;
    },
    changeInp() {
      this.text = Math.random(1, 1000);
    }
  },
};
</script>
<style lang="scss" scoped>


</style>
