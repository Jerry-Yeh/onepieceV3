import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: 'signin'
    },
    {
      path: '/signin',
      name: 'signin',
      component: () => import('./views/Signin.vue')
    },
    {
      path: '/admin',
      name: 'dashboard',
      component: () => import('./views/admin/Dashboard.vue'),
      children: [
        {
          path: 'product',
          name: 'product',
          component: () => import('./components/admin/product.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: 'order',
          name: 'order',
          component: () => import('./components/admin/order.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: 'event',
          name: 'event',
          component: () => import('./components/admin/event.vue'),
          meta: { requiresAuth: true }
        }
      ]
    },
    {
      path: '/',
      name: '',
      component: () => import('./views/Layout.vue'),
      children: [
        {
          path: '',
          name: 'Index',
          component: () => import('./components/pages/index.vue')
        },
        {
          path: 'wanted',
          name: 'wanted',
          component: () => import('./components/pages/wanted.vue')
        },
        {
          path: 'list',
          name: 'list',
          component: () => import('./components/pages/list.vue')
        },
        {
          path: 'createList',
          name: 'createList',
          component: () => import('./components/pages/createList.vue')
        },
        {
          path: 'checkout/:orderId',
          name: 'checkout',
          component: () => import('./components/pages/checkout.vue')
        },
        {
          path: 'completed/:orderId',
          name: 'completed',
          component: () => import('./components/pages/completed.vue')
        },
        {
          path: 'details/:id',
          name: 'details',
          component: () => import('./components/pages/details.vue')
        }
      ]
    }
  ]
})
