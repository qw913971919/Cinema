import Vue from 'vue'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.min.css'
import App from './App.vue'
import router from './router'
import store from './store'
import '../public/css/iconfont/iconfont.css'
import '../public/css/iconfont/iconfont.ttf'
import '../public/css/iconfont/iconfont.woff'
import axios from 'axios'
Vue.prototype.$axios=axios
Vue.use(Mint)
Vue.config.productionTip = false
Vue.filter('setWH',(url,arg)=>{//过滤器
  return url.replace(/w\.h/,arg);//将正则中的内容替换成参数arg
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
