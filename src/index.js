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
  const Constructor = Vue.extend(myButton);
  const button = new Constructor({
    propsData: {
      type: "primary",
      loading: true,
    },
  });
  button.$mount();
  let buttonElement = button.$el;
  expect(buttonElement.classList[1]).to.be.equal("qgy-primary");
  button.$el.remove();
  button.$destroy();
}
{
  const Constructor = Vue.extend(myButton);
  const button = new Constructor({
    propsData: {
      iconDirection: "right",
      loading: true,
      iconClass: "iconfont icon-download",
      type: "success",
    },
  });
  button.$mount("#test");
  let i = button.$el.querySelectorAll("i");
  let iClass = i[0].classList[2];
  // 检测i的order
  let {order} = window.getComputedStyle(i[0]);
  expect(order).to.be.equal('2');
  expect(iClass).to.be.equal('icon-loading');
  button.$el.remove();
  button.$destroy();
}
