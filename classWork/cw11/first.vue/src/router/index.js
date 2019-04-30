import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Page404 from '@/components/Page404'
import Shop from '@/components/Shop'
import Cart from '@/components/Cart'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '*',
      name: 'Page404',
      component: Page404
    }, {
      path: '/shop',
      name: 'Shop',
      component: Shop
    }, {
      path: '/cart',
      name: 'Cart',
      component: Cart
    }
  ]
})
