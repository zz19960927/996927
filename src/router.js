import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"
import bt_nav from "./components/exam/bt_nav.vue"
import parent from "./components/exam/parent.vue"
import login from "./components/message/common/login.vue"
import reg from "./components/message/common/reg.vue"
import Home from "./components/message/Home.vue"
import password from "./components/message/common/password.vue"
import msg from "./components/message/common/msg.vue"
import search from "./components/message/common/search.vue"
import carts from "./components/message/common/carts.vue"
import enter from "./components/message/common/enter.vue"
import news from "./components/message/common/news.vue"
Vue.use(Router)
export default new Router({
  routes: [
    //配置 自定义组件路径  http://127.0.0.1:5050/#path
    // {path:'/',component:HelloContainer},
    {path:'/bt_nav',component:bt_nav},//
    {path:'/parent',component:parent},//
    {path:'/messageHome',component:Home},
    {path:'/login',component:login},
    {path:'/reg',component:reg},
    {path:'/',component:enter},
    {path:'/password',component:password},
    {path:'/message',component:msg},
    {path:'/search',component:search},
    {path:'/carts',component:carts},
    {path:'/enter',component:enter},
    {path:'/news',component:news},
  ]
})
