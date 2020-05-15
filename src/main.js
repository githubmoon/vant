import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant';
import store from '@/vuex/index'
import router from '@/router/index'
import 'vant/lib/index.css';
Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
