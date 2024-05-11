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
        },
        {
          path: '/checkout',
          name: 'Checkout',
          component: () => import('../views/CheckoutViews.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/LoginViews.vue')
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('../views/RegisterViews.vue')
    }
  ]
})

export default router
