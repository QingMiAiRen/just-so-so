import Vue from 'vue'
import app from './App.vue'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import '../lib/mui/css/mui.min.css'
Vue.use(MintUI)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(app)
}).$mount('#app')
