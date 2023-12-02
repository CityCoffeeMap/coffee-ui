import { createRouter, createWebHistory } from 'vue-router'
import ButtonView from '../views/ButtonView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ButtonView
    },
    {
      path: '/card',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CardView.vue')
    },
    {
      path: '/dialog',
      name: 'dialog',
      component: () => import('../views/DialogView.vue')
    }
  ],
  linkActiveClass: 'active'
})

export default router
