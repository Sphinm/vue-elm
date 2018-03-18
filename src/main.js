import Vue from 'vue'
import App from './App'
import router from './router/router'
import VueResource from 'vue-resource'
import 'common/stylus/index.styl'

// 全局注册
Vue.use(VueResource)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
