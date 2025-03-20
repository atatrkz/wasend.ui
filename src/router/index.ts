import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import AuthLayout from '../layouts/AuthLayout.vue'
import AppLayout from '../layouts/AppLayout.vue'

import RouteViewComponent from '../layouts/RouterBypass.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'dashboard' },
  },
  {
    name: 'admin',
    path: '/',
    component: AppLayout,
    redirect: { name: 'dashboard' },
    children: [
      {
        name: 'dashboard',
        path: 'dashboard',
        component: () => import('../pages/admin/dashboard/Dashboard.vue'),
      },
      {
        name: 'number-pool',
        path: '/number-pool',
        component: RouteViewComponent,
        children: [
          {
            name: 'number-pool-main',
            path: '',
            component: () => import('../pages/number-pool/NumberPool.vue'),
          },
          {
            name: 'number-pool-buffer',
            path: 'buffer',
            component: () => import('../pages/number-pool/buffer/Buffer.vue'),
          },
          {
            name: 'number-pool-spolium',
            path: 'spolium',
            component: () => import('../pages/number-pool/spolium/Spolium.vue'),
          },
          {
            name: 'number-pool-pool',
            path: 'pool',
            component: () => import('../pages/number-pool/pool/Pool.vue'),
          },
          {
            name: 'number-pool-registry',
            path: 'registry',
            component: () => import('../pages/number-pool/registry/Registry.vue'),
          },
          {
            name: 'number-pool-session',
            path: 'session',
            component: () => import('../pages/number-pool/session/Session.vue'),
          },
          {
            name: 'number-pool-discard',
            path: 'discard',
            component: () => import('../pages/number-pool/discard/Discard.vue'),
          },
          {
            name: 'number-pool-quarantine',
            path: 'quarantine',
            component: () => import('../pages/number-pool/quarantine/Quarantine.vue'),
          },
        ],
      },
      {
        name: 'task-manager',
        path: 'task-manager',
        component: () => import('../pages/task-manager/TaskManager.vue'),
      },
      {
        name: 'scenario-builder',
        path: 'scenario-builder',
        component: () => import('../pages/scenario-builder/ScenarioBuilder.vue'),
      },
      {
        name: 'profiles',
        path: 'profiles',
        component: () => import('../pages/profiles/Profiles.vue'),
      },
      {
        name: 'connections',
        path: 'connections',
        component: () => import('../pages/connections/Connections.vue'),
      },
      {
        name: 'financial',
        path: '/financial',
        component: RouteViewComponent,
        children: [
          {
            name: 'financial-main',
            path: '',
            component: () => import('../pages/financial/Financial.vue'),
          },
          {
            name: 'financial-orders',
            path: 'orders',
            component: () => import('../pages/financial/orders/Orders.vue'),
          },
          {
            name: 'financial-invoices',
            path: 'invoices',
            component: () => import('../pages/financial/invoices/Invoices.vue'),
          },
        ],
      },
      {
        name: 'reports',
        path: 'reports',
        component: () => import('../pages/reports/Reports.vue'),
      },
      {
        name: 'settings',
        path: 'settings',
        component: () => import('../pages/settings/Settings.vue'),
      },
      {
        name: 'preferences',
        path: 'preferences',
        component: () => import('../pages/preferences/Preferences.vue'),
      },
      {
        name: 'users',
        path: 'users',
        component: () => import('../pages/users/UsersPage.vue'),
      },
      {
        name: 'projects',
        path: 'projects',
        component: () => import('../pages/projects/ProjectsPage.vue'),
      },
    ],
  },
  {
    path: '/auth',
    component: AuthLayout,
    children: [
      {
        name: 'login',
        path: 'login',
        component: () => import('../pages/auth/Login.vue'),
      },
      {
        name: 'signup',
        path: 'signup',
        component: () => import('../pages/auth/Signup.vue'),
      },
      {
        name: 'recover-password',
        path: 'recover-password',
        component: () => import('../pages/auth/RecoverPassword.vue'),
      },
      {
        name: 'recover-password-email',
        path: 'recover-password-email',
        component: () => import('../pages/auth/CheckTheEmail.vue'),
      },
      {
        path: '',
        redirect: { name: 'login' },
      },
    ],
  },
  {
    name: '404',
    path: '/404',
    component: () => import('../pages/404.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    // For some reason using documentation example doesn't scroll on page navigation.
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    } else {
      window.scrollTo(0, 0)
    }
  },
  routes,
})

export default router
