import Toast from './toast.vue';

export default {
  install(Vue, options) {
    Vue.prototype.$toast = function (options = {}) {
      let $options = {
        message: '',
        duration: 3000,
        close: false,
        position: 'bottom',
        closeText: '关闭',
        callback: null,
        full: false
      }
      for (let key in options) {
        $options[key] = options[key];
      }
      let Constructor = Vue.extend(Toast);
      let toast = new Constructor({
        propsData: {
          message: $options.message,
          close: $options.close,
          position: $options.position,
          closeText: $options.closeText,
          callback: $options.callback,
          full: $options.full
        }

      });
      toast.$mount();
      document.body.appendChild(toast.$el);
      if ($options.duration !== -1) {
        setTimeout(() => {
          toast.$el.remove();
          toast.$destroy();
        }, $options.duration)
      } else if ($options.duration === -1 && !$options.close) {
        console.error('duration and close must be passed either way, or Toast will not be closed')
      }

    }
  }
}