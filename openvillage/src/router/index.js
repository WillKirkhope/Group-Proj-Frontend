import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Form from '@/components/Form'
import PageNotFound from '@/components/PageNotFound'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/create',
      name: 'Form',
      component: Form
    },
    {
      path: '*',
      name: 'PageNotFound',
      component: PageNotFound
    }
  ]
})
