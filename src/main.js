import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 第二种引入方式
import './assets/css/base.css'
// 引入js适配移动端
// import './assets/js/phone'
// 引入vant库
// import vant from 'vant'
// import 'vant/lib/index.css'
// Vue.use(vant)

// 挂载全局echarts
// import echarts from 'echarts'

// 第三种开发插件echarts
import echarts from './plugins/echarts'
Vue.use(echarts)

Vue.config.productionTip = false
// Vue.prototype.$echarts = echarts

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
