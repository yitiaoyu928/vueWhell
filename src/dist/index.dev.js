"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _app = _interopRequireDefault(require("./app.vue"));

var _index = _interopRequireDefault(require("./components/qgy-button/index.vue"));

var _index2 = _interopRequireDefault(require("./components/qgy-text-link/index.vue"));

var _chai = _interopRequireDefault(require("chai"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].component("qgy-button", _index["default"]);

_vue["default"].component("qgy-link", _index2["default"]);

var vm = new _vue["default"]({
  el: "#app",
  render: function render(c) {
    return c(_app["default"]);
  }
});
var expect = _chai["default"].expect;
{
  var Constructor = _vue["default"].extend(_index["default"]);

  var button = new Constructor({
    propsData: {
      type: "primary",
      loading: true
    }
  });
  button.$mount();
  var buttonElement = button.$el;
  expect(buttonElement.classList[1]).to.be.equal("qgy-primary");
  button.$el.remove();
  button.$destroy();
}
{
  var _Constructor = _vue["default"].extend(_index["default"]);

  var _button = new _Constructor({
    propsData: {
      iconDirection: "right",
      loading: true,
      iconClass: "iconfont icon-download",
      type: "success"
    }
  });

  _button.$mount("#test");

  var i = _button.$el.querySelectorAll("i");

  var iClass = i[0].classList[2]; // 检测i的order

  var _window$getComputedSt = window.getComputedStyle(i[0]),
      order = _window$getComputedSt.order;

  expect(order).to.be.equal('2');
  expect(iClass).to.be.equal('icon-loading');

  _button.$el.remove();

  _button.$destroy();
}