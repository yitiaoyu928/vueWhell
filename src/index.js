import Vue from "vue";
import app from "./app.vue";
import myButton from "./components/qgy-button/index.vue";
import myTextLink from "./components/qgy-text-link/index.vue";
import myTag from './components/qgy-tag/index.vue';
import mySwitch from './components/qgy-switch/index.vue';
import myInput from './components/qgy-input/index.vue';
import myIcon from './components/qgy-icon/index.vue';
import myRow from './components/qgy-row/index.vue';
import myCol from './components/qgy-col/index.vue';
import myLayout from './components/qgy-layout/index.vue';
import mySider from './components/qgy-sider/index.vue';
import myHeader from './components/qgy-header/index.vue';
import myFooter from './components/qgy-footer/index.vue';
import myContent from './components/qgy-content/index.vue';
import myToast from './components/qgy-toast/toast.vue';
// 引入Toast插件
import toast from './components/qgy-toast/toastPlugin.js';
Vue.use(toast);
import chai from "chai";

Vue.component("qgy-button", myButton);
Vue.component("qgy-link", myTextLink);
Vue.component('qgy-tag', myTag);
Vue.component('qgy-switch', mySwitch);
Vue.component('qgy-input', myInput);
Vue.component('qgy-icon', myIcon);
Vue.component('qgy-row', myRow);
Vue.component('qgy-col', myCol);
Vue.component('qgy-layout', myLayout);
Vue.component('qgy-header', myHeader);
Vue.component('qgy-footer', myFooter);
Vue.component('qgy-sider', mySider);
Vue.component('qgy-content', myContent);
Vue.component('qgy-toast', myToast);
let vm = new Vue({
  el: "#app",
  render: function (c) {
    return c(app);
  }
});
// 单元测试
let expect = chai.expect;
{
  // 测试图标的样式
  let Constructor = Vue.extend(myButton);
  let button_test = new Constructor({
    propsData: {
      iconClass: 'iconfont icon-download'
    }
  });
  button_test.$mount();
  let button = button_test.$el.querySelector('i');
  let i_class = button.classList[2];
  expect(i_class).to.be.a('string');
  expect(i_class).to.equal('icon-download');
  button_test.$destroy();
  button_test.$el.remove();
}
{
  // 测试图标的order
  let Constructor = Vue.extend(myButton);
  let button_test = new Constructor({
    propsData: {
      iconClass: 'iconfont icon-download',
      iconDirection: 'right'
    }
  }).$mount('#test');
  let button_i = button_test.$el.querySelector('i');
  let button_class = button_i.classList.length;
  expect(button_class).to.equal(4);
  let {order} = window.getComputedStyle(button_i);
  expect(order).to.equal('2');
  button_test.$destroy();
  button_test.$el.remove();
}
{
  // 测试点击事件
  let Constructor = Vue.extend(myButton);
  let button_test = new Constructor({
    propsData: {
      iconClass: 'iconfont icon-download'
    }
  }).$mount();
  button_test.$on('click', () => {
    expect(1).to.equal(1);
  });
  button_test.$el.click();
  button_test.$el.remove();
  button_test.$destroy();
}