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
describe('myButton', function () {});