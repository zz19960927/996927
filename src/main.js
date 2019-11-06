import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios"
//1. 引入第三方组件库
// 1.1完成引入所有组件
import MintUI from "mint-ui"
// 1.2 单独引入组件库样式文件
import 'mint-ui/lib/style.css'
// 1.3 将mint-ui注册vue
Vue.use(MintUI)
Vue.prototype.axios=axios;
// 1.4 组件库中挑一个组件用
Vue.config.productionTip = false

//main.js就是引入和配置第三方库模块


//5: 设置请求的根路径 
//Vue.http.options.root = "http://127.0.0.1/vue_ser/";
//6:全局设置post 时候表音的数据组织格式为 application/x-www-form-urlencoded
//Vue.http.options.emulateJSON = true;
// 导入 MUI 的样式表， 和 Bootstrap 用法没有差别
// import './lib/mui/css/mui.css'
// // 导入 MUI 的样式表，扩展图标样式，购物车图标
// // 还需要加载图标字体文件
// import './lib/mui/css/icons-extra.css'
// 1.4引入图标字体文件
import './font/iconfont.css'
import './font2/iconfont.css'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
