import { createRouter, createWebHistory } from 'vue-router'
import Index from 'views/Index.vue'
import Login from 'views/Login.vue'
import Info from 'views/Person/Info.vue'
import edit from 'views/Person/editInfo.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/project',
    },
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/project',
      component: Index,
      redirect: '/project/info',
      children: [
        {
          path: '/project/info',
          component: Info
        },
        {
          path: '/project/edit',
          component: edit
        }
      ]
    },
  ]
})

export default router
