import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../layouts/MainLayouts.vue'),
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import('../views/HomeViews.vue')
        },
        {
          path: '/cart',
          name: 'Cart',
          component: () => import('../views/CartViews.vue')
        }
      ]
    }
  ]
})

export default router
