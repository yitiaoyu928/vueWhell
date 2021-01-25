import Vue from "vue";
import app from "./app.vue";
import myButton from "./components/qgy-button/index.vue";
import myTextLink from "./components/qgy-text-link/index.vue";
import chai from "chai";
Vue.component("qgy-button", myButton);
Vue.component("qgy-link", myTextLink);
let vm = new Vue({
  el: "#app",
  render: function(c) {
    return c(app);
  },
});
let expect = chai.expect;
{
  // 测试图标的样式
  let Constructor = Vue.extend(myButton);
  let button_test = new Constructor({
    propsData:{
      iconClass:'iconfont icon-download'
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
    propsData:{
      iconClass:'iconfont icon-download',
      iconDirection:'right'
    }
  }).$mount('#test');
  let button_i = button_test.$el.querySelector('i');
  let {order} = window.getComputedStyle(button_i);
  expect(order).to.equal('2');
  button_test.$destroy();
  button_test.$el.remove();
}
{
  // 测试点击事件
  let Constructor = Vue.extend(myButton);
  let button_test = new Constructor({
    propsData:{
      iconClass:'iconfont icon-download'
    }
  }).$mount();
  button_test.$on('click',()=>{
    expect(1).to.equal(1);
  });
  button_test.$el.click();
  button_test.$el.remove();
  button_test.$destroy();
}