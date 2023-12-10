import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/index.vue'
import HomeView from '../views/HomeView.vue'
import Info from '../views/Info.vue'
import Login from '../views/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/project',
      component: Index,
      children: [
        {
          path: '/home',
          name: 'home',
          component: HomeView
        },
        {
          path: '/info',
          name: 'info',
          component: Info
        },
      ]
    },
  ]
})

export default router
