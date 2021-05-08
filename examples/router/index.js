import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
    {
      path:'/index',
      meta:{
        name: 'index'
      },
      component: ()=> import ('../views/home.vue'),
      children: [
        {
          path: '/index/home',
          name: 'home',
          meta:{
            name: 'home'
          },
          component: ()=> import ('../views/home/index')
        },
        {
          path: '/index/Button',
          name: 'Button',
          meta:{
            name: 'Button'
          },
          component: ()=> import ('../views/Button/index')
        },
        {
          path: '/index/Radio',
          name: 'Radio',
          meta:{
            name: 'Radio'
          },
          component: ()=> import ('../views/Radio/index')
        },
        {
          path: '/index/Link',
          name: 'Link',
          meta:{
            name: 'Link'
          },
          component: ()=> import ('../views/Link/index')
        },
        {
          path: '/index/Select',
          name: 'Select',
          meta:{
            name: 'Select'
          },
          component: ()=> import ('../views/Select/index')
        },
        {
          path: '/index/Input',
          name: 'Input',
          meta:{
            name: 'Input'
          },
          component: ()=> import ('../views/Input/index')
        },
        {
          path:'/index/updateLog',
          name: 'updateLog',
          meta:{
            name: 'updateLog'
          },
          component: ()=> import ('../views/updateLog/index'),
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
