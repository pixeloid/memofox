import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

import firebase from 'firebase/app'
import 'firebase/auth'

const routes = [
  {
    path: '/admin',
    name: 'Secret',
    component: () => import('../views/Admin.vue'),
    meta: { requiresAuth: true },
    children: [
      {
        path: 'products',
        name: 'Products',
        component: () => import('../views/secret/Products.vue')
      },
      {
        path: 'overview',
        name: 'Overview',
        component: () => import('../views/secret/Overview.vue')
      },
      {
        path: 'orders',
        name: 'Orders',
        component: () => import('../views/secret/Orders.vue')
      },
    ]
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/public/Login.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('../views/public/Signup.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: function () {
      return import('../views/public/About.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const isAuthenticated = firebase.auth().currentUser

  if(requiresAuth && !isAuthenticated) {
    next('/login')
  } else {
    next()
  }

})

export default router
