import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/home/home-view.vue'

// 配置核算路由 --- 异步
const hesuan = () => import('../views/heSuan/home-index.vue')
// 配置奉贤地区路由
const area = () => import('../views/area/area-index.vue')
const prevention = () => import('../views/prevention/pre-index.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/hesuan',
    component: hesuan
  },
  {
    path: '/area',
    name: 'area',
    component: area
  },
  {
    path: '/prevention',
    name: 'prevention',
    component: prevention
  }
]

const router = new VueRouter({
  routes
})

export default router
