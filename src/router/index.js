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
        path: 'commerce',
        name: 'secretProducts',
        component: () => import('../views/secret/Products.vue')
      },
      {
        path: 'faq',
        name: 'secretFaq',
        component: () => import('../views/secret/Faq.vue')
      },
      {
        path: 'articles',
        name: 'secretBlog',
        component: () => import('../views/secret/Blog.vue')
      },
      {
        path: 'orders',
        name: 'Orders',
        component: () => import('../views/secret/Orders.vue')
      }
    ]
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('../views/public/blog.vue')
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import('../views/public/Products.vue')
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

  if (requiresAuth && !isAuthenticated) {
    next('/login')
  } else {
    next()
  }
})

export default router
