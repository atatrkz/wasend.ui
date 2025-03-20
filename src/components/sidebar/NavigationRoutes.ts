export interface INavigationRoute {
  name: string
  displayName: string
  meta: { icon: string }
  children?: INavigationRoute[]
}

export default {
  root: {
    name: '/',
    displayName: 'navigationRoutes.home',
  },
  routes: [
    {
      name: 'dashboard',
      displayName: 'menu.dashboard',
      meta: {
        icon: 'vuestic-iconset-dashboard',
      },
    },
    {
      name: 'number-pool',
      displayName: 'menu.number-pool',
      meta: {
        icon: 'phone',
      },
      children: [
        {
          name: 'number-pool-main',
          displayName: 'menu.number-pool-main',
        },
        {
          name: 'number-pool-buffer',
          displayName: 'menu.number-pool-buffer',
        },
        {
          name: 'number-pool-spolium',
          displayName: 'menu.number-pool-spolium',
        },
        {
          name: 'number-pool-pool',
          displayName: 'menu.number-pool-pool',
        },
        {
          name: 'number-pool-registry',
          displayName: 'menu.number-pool-registry',
        },
        {
          name: 'number-pool-session',
          displayName: 'menu.number-pool-session',
        },
        {
          name: 'number-pool-discard',
          displayName: 'menu.number-pool-discard',
        },
        {
          name: 'number-pool-quarantine',
          displayName: 'menu.number-pool-quarantine',
        },
      ],
    },
    {
      name: 'task-manager',
      displayName: 'menu.task-manager',
      meta: {
        icon: 'assignment',
      },
    },
    {
      name: 'scenario-builder',
      displayName: 'menu.scenario-builder',
      meta: {
        icon: 'architecture',
      },
    },
    {
      name: 'profiles',
      displayName: 'menu.profiles',
      meta: {
        icon: 'account_box',
      },
    },
    {
      name: 'connections',
      displayName: 'menu.connections',
      meta: {
        icon: 'link',
      },
    },
    {
      name: 'financial',
      displayName: 'menu.financial',
      meta: {
        icon: 'attach_money',
      },
      children: [
        {
          name: 'financial-main',
          displayName: 'menu.financial-main',
        },
        {
          name: 'financial-orders',
          displayName: 'menu.financial-orders',
        },
        {
          name: 'financial-invoices',
          displayName: 'menu.financial-invoices',
        },
      ],
    },
    {
      name: 'reports',
      displayName: 'menu.reports',
      meta: {
        icon: 'summarize',
      },
    },
    {
      name: 'users',
      displayName: 'menu.users',
      meta: {
        icon: 'group',
      },
    },
    {
      name: 'projects',
      displayName: 'menu.projects',
      meta: {
        icon: 'folder_shared',
      },
    },
    {
      name: 'auth',
      displayName: 'menu.auth',
      meta: {
        icon: 'login',
      },
      children: [
        {
          name: 'login',
          displayName: 'menu.login',
        },
        {
          name: 'signup',
          displayName: 'menu.signup',
        },
        {
          name: 'recover-password',
          displayName: 'menu.recover-password',
        },
      ],
    },
    {
      name: '404',
      displayName: 'menu.404',
      meta: {
        icon: 'vuestic-iconset-files',
      },
    },
    {
      name: 'preferences',
      displayName: 'menu.preferences',
      meta: {
        icon: 'manage_accounts',
      },
    },
    {
      name: 'settings',
      displayName: 'menu.settings',
      meta: {
        icon: 'settings',
      },
    },
  ] as INavigationRoute[],
}
