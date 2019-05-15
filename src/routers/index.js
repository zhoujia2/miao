import Vue from 'vue'
import Router from 'vue-router'
import CinimerRouter from './cinimer'
import MineRouter from './mine'
import MoiveRouter from './movie'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    CinimerRouter,
    MineRouter,
    MoiveRouter,
    {
      path:"/",
      redirect:'./movie'
    }
  ]
})
