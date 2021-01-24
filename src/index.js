import Vue from 'vue';
import app from './app.vue';
import myButton from './components/qgy-button/index.vue';
import myTextLink from './components/qgy-text-link/index.vue';
import './public/fontIcon/iconfont.css';
Vue.component('qgy-button',myButton);
Vue.component('qgy-link',myTextLink);
let vm = new Vue({
	el:'#app',
	render:function(c) {
		return c(app)
	}
})