import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import About from '../views/about.vue'
import ForgotPassword from '../views/ForgotPassword.vue'
import ResetPassword from '../views/ResetPassword.vue'
import FinishReset from '../views/FinishReset.vue'

import '@fortawesome/fontawesome-free/css/all.css'
import home from "@/views/dashboard/home.vue"
import dashboard from '../views/dashboard/dashboard.vue'
import Tests from "@/views/Tests.vue";
import Testing from "@/views/Testing.vue";
import Users from "@/views/SuperAdmin/Users.vue";
import Learn from "@/views/Learn"
import Progress from "@/views/Progress"
import Tasks from "@/views/SuperAdmin/manage/Tasks"
import Overview from "@/views/SuperAdmin/manage/Overview"
import project_users from "@/views/SuperAdmin/manage/Project_users"


import Project from "@/views/SuperAdmin/Project.vue"

const routes = [

  {
    path: '/tests',
    name: 'test',
    component: Tests,
    children: [
      {
        path: '',
        name: 'testing',
        component: Testing,
      },
      {
        path: '/learn',
        name: 'learn',
        component: Learn,
      },
      {
        path: '/progress',
        name: 'progress',
        component: Progress,
      }
    ]
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
    path: '/',
    name: 'dashboard',
    component: dashboard,
    children: [
      {
        path: '',
        name: 'home',
        component: home,
      },
      {
        path: '/projects/overview/:id',
        name: 'overview',
        component: Overview,
      },
      {
        path: '/projects/project_users:id',
        name: 'project_users',
        component: project_users,
      },
      {
        path: 'users',
        name: 'users',
        component: Users,
      },
      {
        path: '/projects',
        name: 'projects',
        component: Project,

      }

    ]
  },

  {
    path: '/projects/tasks/:id',
    name: 'tasks',
    component: Tasks,
  },
    {
    path: '/about',
    name: 'about',
    component: About
  },
    {
    path: '/forgot-password',
    name: 'forgot-password',
    component: ForgotPassword
  },
    {
    path: '/reset-password',
    name: 'reset-password',
    component: ResetPassword
  },
    {
    path: '/finish-password/:id',
    name: 'finish-password',
    component: FinishReset
  }
  ]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
