import Vue from 'vue'
import App from './App.vue'
import router from './router'
import kiwiui from '../packages'
Vue.use(kiwiui)
// 公共样式
import './styles/base.css'

import clickoutside from "../packages/utils/clickoutside";  //引入路径根据自己项目而定
Vue.directive("clickoutside",clickoutside);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
