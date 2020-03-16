import Vue from 'vue'
import Router from 'vue-router'
import login from '../components/login/login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/login',name:'login',component:login}
  ]
})
