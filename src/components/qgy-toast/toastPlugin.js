import Toast from './toast.vue';
export default {
 install(Vue,options) {
  Vue.prototype.$toast = function(options = {}) {
    let $options = {
      message:'',
      duration:3000,
      close:false,
      position:'bottom'
    }
    for(let key in options) {
      $options[key] = options[key];
    }
    console.log($options)
    let Constructor = Vue.extend(Toast);
    let toast = new Constructor();
    toast.$slots.default = options.message;
    toast.$mount();
    document.body.appendChild(toast.$el);
  }
 }
}