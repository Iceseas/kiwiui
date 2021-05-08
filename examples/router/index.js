import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
    {
      path:'/index',
      component: ()=> import ('../views/home.vue'),
      children: [
        {
          path: '/index/home',
          component: ()=> import ('../views/home/index')
        },
        {
          path: '/index/Button',
          component: ()=> import ('../views/Button/index')
        },
        {
          path: '/index/Radio',
          component: ()=> import ('../views/Radio/index')
        },
        {
          path: '/index/Link',
          component: ()=> import ('../views/Link/index')
        },
        {
          path: '/index/Select',
          component: ()=> import ('../views/Select/index')
        },
        {
          path: '/index/Input',
          component: ()=> import ('../views/Input/index')
        },
      ]
    },
    {
      path: '*',
      redirect: '/index/home'
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
