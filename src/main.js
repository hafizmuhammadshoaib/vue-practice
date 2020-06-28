import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
// import '@/assets/css/tailwind.css'
import '@/assets/scss/tailwind.scss'
import { router } from './routes';
import store from './store';

Vue.use(VueRouter);
Vue.use(Vuex)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
