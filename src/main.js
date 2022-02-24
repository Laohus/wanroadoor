import Vue from 'vue'
import App from './App.vue'
import router from  './router/index'
import store from "@/store";

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  store:store,
  render: h => h(App),
}).$mount('#app')

Vue.use(ElementUI);

