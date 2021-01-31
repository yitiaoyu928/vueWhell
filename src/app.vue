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
        <qgy-col span="12">1</qgy-col>
        <qgy-col span="10">2</qgy-col>
        <qgy-col span="2">3</qgy-col>
      </qgy-row>
      <qgy-row>
        <qgy-col span="4" offset="2">4</qgy-col>
        <qgy-col span="10" offset="8">5</qgy-col>
      </qgy-row>
      <qgy-row gutter="5" align="center">
        <qgy-col span="4" :xs="{span:12,offset:4}" :md="{span:20}" :sm="{span:14}" :lg="{span:5}">6</qgy-col>
        <qgy-col span="6">7</qgy-col>
      </qgy-row>
    </div>
    <div>
      <qgy-layout>
        <qgy-header>头部</qgy-header>
        <qgy-layout>
          <qgy-sider>sider</qgy-sider>
          <qgy-content>
            内容
          </qgy-content>
        </qgy-layout>
        <qgy-footer>footer</qgy-footer>
      </qgy-layout>
    </div>
    <div @click="show">click me</div>
    <div>
      <qgy-progress :percentage="percentage" type="default"></qgy-progress>
      <qgy-progress :percentage="percentage" type="primary"></qgy-progress>
      <qgy-progress :percentage="percentage" type="success"></qgy-progress>
      <button @click="peradd">add</button>
      <button @click="perminus">minus</button>
    </div>
    <div>
      <qgy-tab>
        <qgy-tab-item>1</qgy-tab-item>
        <qgy-tab-item>2</qgy-tab-item>
        <qgy-tab-item>3</qgy-tab-item>
      </qgy-tab>
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      loading1: false,
      text: "hi",
      percentage: 10
    };
  },
  methods: {
    toggle() {
      this.loading1 = !this.loading1;
    },
    changeInp() {
      this.text = Math.random(1, 1000);
    },
    show() {
      this.$toast({
        message: 'hello hello worldhello worldhellohello orldworldello worldworld worldhello worldhellohello orldworldello worldworld worldhello worldhellohello orldworldello worldworld worldhello worldhellohello orldworldello worldworld worldhello worldhellohello orldworldello worldworld',
        position: 'middle',
        duration: -1,
        close: true,
        full: false
      });
    },
    peradd() {
      this.percentage += 10;
    },
    perminus() {
      this.percentage -= 10;
    }
  },
};
</script>
<style lang="scss" scoped>


</style>
