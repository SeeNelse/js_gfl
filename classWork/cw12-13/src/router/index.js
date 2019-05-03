import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Page404 from '@/components/Page404'
import Shop from '@/components/Shop'
import Users from '@/components/Users'
import PageUser from '@/components/PageUser'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/users',
      name: 'Users',
      component: Users
    },
    {
      path: '/user/:id',
      name: 'PageUser',
      component: PageUser
    },
    {
      path: '*',
      name: 'Page404',
      component: Page404
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop
    }
  ]
})
