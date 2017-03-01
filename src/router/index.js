import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Index from '@/pages/index'
import Login from '@/pages/login'
import Home from '@/pages/home'
import Signout from '@/pages/signout'
import App from '@/App'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: App,
      children: [
        {
          path: '/login',
          meta: {auth: false},
          component: Login
        },
        {
          path: '/signout',
          component: Signout
        },
        {
          path: '/home',
          component: Home
        },
        {
      		path: '/',
      		component: Index
      	}
      ]
    }
  ]
})
