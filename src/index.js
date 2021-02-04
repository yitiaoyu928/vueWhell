import Vue from "vue";
import app from "./app.vue";
import myIcon from './components/qgy-icon/index.vue'
import myCollapse from './components/qgy-collapse/collapse.vue';
import myCollapseItem from './components/qgy-collapse-item/collapse-item.vue';
Vue.component('qgy-icon',myIcon);
Vue.component('qgy-collapse',myCollapse);
Vue.component('qgy-collapse-item',myCollapseItem);
let vm = new Vue({
  el: "#app",
  render: function (c) {
    return c(app);
  }
});
