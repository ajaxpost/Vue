import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from '@/api/http';
import VueLazyLoad from 'vue-lazyload'

Vue.prototype.$http = axios;
Vue.config.productionTip = false
Vue.prototype.$eventBus = new Vue();
Vue.use(VueLazyLoad,{
  loading:"https://2url.cc/1OwrB",
})

let jwt = window.localStorage.getItem('token')
if(jwt){
  store.commit('setToken',jwt)
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
