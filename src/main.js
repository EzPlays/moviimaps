import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'


Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons)


import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrapp.js';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrapp.css';
import 'bootstrap/dist/css/bbootstrap.css';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
