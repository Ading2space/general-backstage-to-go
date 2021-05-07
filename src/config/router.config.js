import { BasicLayout, UserLayout, RouteView } from '@/layouts'

// const RouteView = {
//   name: 'RouteView',
//   render: (h) => h('router-view'),
// }

export const constantRouterMap = [
  {
    path: '/user',
    name: 'user',
    component: UserLayout,
    children: [
      {
        path: '/user/login',
        name: 'login',
        component: () => import('@/views/user/Login')
      }
    ]
  },
  {
    path: '/404',
    component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404')
  }
]

export const asyncRouterMap = [
  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    meta: { title: 'menu.home' },
    redirect: '/welcome',
    children: [
      {
        path: '/welcome',
        name: 'Welcome',
        component: () => import('@/views/dashboard/Welcome'),
        meta: {
          title: 'menu.dashboard.welcome',
          keepAlive: false,
          icon: 'home',
          permission: ['dashboard']
        }
      },
      // 联系人模块
      {
        path: '/contact',
        name: 'Contact',
        component: RouteView,
        meta: {
          title: 'menu.contact.contact',
          icon: 'contacts'
        },
        redirect: '/contact/list',
        children: [
          {
            path: '/contact/list',
            name: 'contactList',
            component: () => import('@/views/contact/ContactList'),
            meta: { title: 'menu.contact.contactList', keepAlive: false }
          }
        ]
      },
      // account
      {
        path: '/account',
        component: RouteView,
        redirect: '/account/center',
        name: 'account',
        meta: { title: 'pages.userCenter.userPage', icon: 'user', keepAlive: true, permission: ['user'] },
        hidden: true,
        children: [
          {
            path: '/account/center',
            name: 'center',
            component: () => import('@/views/account/center'),
            meta: { title: 'navBar.userInfo', keepAlive: true, permission: ['user'] }
          },
          {
            path: '/account/settings',
            name: 'settings',
            component: () => import('@/views/account/settings/Index'),
            meta: { title: 'navBar.userSettings', hideHeader: true, permission: ['user'] },
            redirect: '/account/settings/base',
            hideChildrenInMenu: true,
            children: [
              {
                path: '/account/settings/base',
                name: 'BaseSettings',
                component: () => import('@/views/account/settings/BaseSetting'),
                meta: { title: 'pages.userCenter.userPage', hidden: true, permission: ['user'] }
              },
              {
                path: '/account/settings/security',
                name: 'SecuritySettings',
                component: () => import('@/views/account/settings/Security'),
                meta: { title: 'pages.userCenter.settings.security', hidden: true, keepAlive: true, permission: ['user'] }
              },
              {
                path: '/account/settings/binding',
                name: 'BindingSettings',
                component: () => import('@/views/account/settings/Binding'),
                meta: { title: 'pages.userCenter.settings.binding', hidden: true, keepAlive: true, permission: ['user'] }
              }
            ]
          }
        ]
      }

      // dashboard
      /* {
        path: '/dashboard',
        name: 'dashboard',
        redirect: '/dashboard/welcome',
        component: RouteView,
        meta: { title: 'menu.dashboard.default', keepAlive: true, icon: 'dashboard', permission: ['dashboard'] },
        children: [
          {
            path: '/dashboard/welcome',
            name: 'Welcome',
            component: () => import('@/views/dashboard/Welcome'),
            meta: { title: 'menu.dashboard.welcome', keepAlive: false, permission: ['dashboard'] },
          },
        ],
      }, */
    ]
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]
if (process.env.NODE_ENV !== 'production') {
  const devRoutes = [
    {
      path: '/devTools',
      name: 'DevTools',
      component: RouteView,
      meta: {
        title: 'menu.dev.tools',
        icon: 'tool'
      },
      redirect: '/devTools/toolBox',
      children: [
        // {
        //   path: '/devTools/iconSelectorView',
        //   name: 'IconSelectorView',
        //   component: () => import('@/views/devTools/IconSelectorView'),
        //   meta: { title: 'menu.dev.iconSelector', keepAlive: false }
        // },
        {
          path: '/devTools/toolBox',
          name: 'ToolBox',
          component: () => import('@/views/devTools/ToolBox'),
          meta: { title: 'menu.dev.toolBox', keepAlive: false }
        },
        // Exception
        {
          path: '/exception',
          name: 'exception',
          component: RouteView,
          redirect: '/exception/403',
          meta: { title: '异常页', icon: 'warning', permission: ['exception'] },
          children: [
            {
              path: '/exception/403',
              name: 'Exception403',
              component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/403'),
              meta: { title: '403', permission: ['exception'] }
            },
            {
              path: '/exception/404',
              name: 'Exception404',
              component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404'),
              meta: { title: '404', permission: ['exception'] }
            },
            {
              path: '/exception/500',
              name: 'Exception500',
              component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/500'),
              meta: { title: '500', permission: ['exception'] }
            }
          ]
        },
        {
          path: '/form',
          name: 'form',
          meta: {
            keepAlive: true,
            title: 'menu.form.default',
            icon: 'video-camera'
          },
          component: RouteView,
          children: [
            {
              path: '/form/basic-form',
              name: 'basic-form',
              meta: {
                keepAlive: true,
                icon: 'smile',
                title: 'menu.form.basicform'
              },
              component: () => import(/* webpackChunkName: "about" */ '../views/form/basic-form')
            },
            {
              path: '/form/step-form',
              name: 'step-form',
              meta: {
                keepAlive: true,
                icon: 'smile',
                title: 'menu.form.stepform'
              },
              component: () => import(/* webpackChunkName: "about" */ '../views/form/step-form')
            },
            {
              path: '/form/advanced-form',
              name: 'advanced-form',
              meta: {
                keepAlive: true,
                icon: 'smile',
                title: 'menu.form.advancedform'
              },
              component: () => import(/* webpackChunkName: "about" */ '../views/form/advanced-form')
            }
          ]
        }
      ]
    }
  ]
  asyncRouterMap[0].children = [...asyncRouterMap[0].children, ...devRoutes]
}
