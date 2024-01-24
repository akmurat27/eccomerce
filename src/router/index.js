import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/homeView',
    name: 'home',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },{
      path: '/productlist',
      name: 'ProductList',
      component: () => import('@/components/ProductList')
    },{
      path:'/productlistitem/:id',
      name:'productlistitem',
      component: () => import('@/components/ProductListItem')
    },{
      
      path:'/cartItem',
      name:'cartItem',
      component: () => import('@/components/CartItem')
    },{
      path:'/Contact',
      name:'Contact',
      component: () => import('@/components/ContactPage')
    },{
      path:'/menuPage',
      name:'menu',
      component: () => import('@/components/menuPage')
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
