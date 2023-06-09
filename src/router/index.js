import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '../views/About.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import '@fortawesome/fontawesome-free/css/all.css'

import dashboard from '../views/dashboard/dashboard.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
    {
    path: '/dashboard',
    name: 'dashboard',
    component: dashboard
  }
  ]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
