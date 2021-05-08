import Vue from 'vue'
import App from './App.vue'
import router from './router'
import iceUI from '../packages'
Vue.use(iceUI)
// 公共样式
import './styles/base.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
