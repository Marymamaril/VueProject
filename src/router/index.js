import { createRouter, createWebHistory } from 'vue-router'
import BasicMathView from '../views/BasicMathView.vue'
import StringAppView from '../views/StringAppView.vue'
import Dashboard from '../views/Dashboard.vue'
import Aboutme from '../views/Aboutme.vue'
import vuetify from '../views/Vuetify.vue'
import AxiosDemo from '../views/AxiosDemo.vue'
import AboutApp from '../views/AboutApp.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta:
      {
        requiresAuth: true
      }
    },
    {
      path: '/stringApp',
      name: 'StringAppView',
      component: StringAppView,
      meta:
      {
        requiresAuth: true
      }
    },
    {
    path: '/basicMath',
    name: 'basicMath',
    component: BasicMathView,
    meta:
    {
      requiresAuth: true
    }
    },
    {
      path: '/vuetify',
      name: 'vuetify',
      component: vuetify,
      meta:
      {
        requiresAuth: true
      }
      },
    {
      path: '/aboutme',
      name: 'aboutme',
      component: Aboutme,
      meta:
      {
        requiresAuth: true
      }
      },
      {
        path: '/quizapp',
        name: 'quizapp',
        component: AxiosDemo,
        meta:
        {
          requiresAuth: true
        }
        },
        {
          path: '/aboutapp',
          name: 'aboutapp',
          component: AboutApp,
          meta:
          {
            requiresAuth: true
          }
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
  ]
})

export default router
