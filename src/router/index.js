import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/GptView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/BardView.vue')
  }
  ,
  {
    path: '/GPTdes',
    name: 'GPTdes',
    component: () => import('../views/GPTdescrpitionView.vue')
  }
  ,
  {
    path: '/Barddes',
    name: 'Barddes',
    component: () => import('../views/BarddescriptionView.vue')
  }
  ,
  {
    path: '/PDF',
    name: 'PDF',
    component: () => import('../views/PDFreaderView.vue')
  }
  ,
  {
    path: '/PDF1',
    name: 'PDF1',
    component: () => import('../views/PDFView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
