// import { createRouter, createWebHashHistory } from 'vue-router'
// import type { RouteRecordRaw } from 'vue-router'

// import localCache from '@/utils/caches'

// const routes: RouteRecordRaw[] = [
//   {
//     path: '/',
//     redirect: '/main'
//   },
//   {
//     path: '/login',
//     name: 'login',
//     component: () => import('@/views/login/login.vue')
//   },
//   {
//     path: '/main',
//     name: 'main',
//     component: () => import('@/views/main/main.vue')
//     // children: [] -> 根据userMenus来决定 -> children
//   },
//   {
//     path: '/:pathMatch(.*)*',
//     name: 'notFound',
//     component: () => import('@/views/not-found/not-found.vue')
//   }
// ]

// const router = createRouter({
//   routes,
//   history: createWebHashHistory()
// })

// // 导航守卫
// router.beforeEach((to) => {
//   if (to.path !== '/login') {
//     const token = localCache.getCache('token')
//     if (!token) {
//       return '/login'
//     }
//   }

//   if (to.path.indexOf('/main') !== -1) {
//     if (to.name === 'notFound') {
//       to.name = 'user'
//     }
//   }
// })

// export default router

// declare module '*.json'

// declare module '*.vue' {
//   import type { DefineComponent } from 'vue'
//   const component: DefineComponent<{}, {}, any>
//   export default component
// }
/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare let $store: any
declare module '*.json'
