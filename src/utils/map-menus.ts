import { IBreadcrumb } from '@/base-ui/breadcrumb'
import { RouteRecordRaw } from 'vue-router'

let firstMenu: any = null

export function mapMenusToRoutes(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []

  // 1.先去加载默认所有的routes
  const allRoutes: RouteRecordRaw[] = []
  const routeFiles = require.context('../router/main', true, /\.ts/)
  routeFiles.keys().forEach((key) => {
    const route = require('../router/main' + key.split('.')[1])
    allRoutes.push(route.default)
  })

  // 2.根据菜单获取需要添加的routes
  // userMenus:
  // type === 1 -> children -> type === 1
  // type === 2 -> url -> route
  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((route) => route.path === menu.url)
        if (route) routes.push(route)
        // 把第一条菜单, 放到firstMenu
        if (firstMenu == null) {
          firstMenu = menu
        }
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }

  _recurseGetRoute(userMenus)

  return routes
}

// 映射路径和菜单的关系
export function pathMapToMenu(
  userMenus: any[],
  currentPath: string,
  breadcrumb?: IBreadcrumb[]
): any {
  for (const menu of userMenus) {
    if (menu.type == 1) {
      const findMeny = pathMapToMenu(menu.children ?? [], currentPath)
      if (findMeny) {
        // 先放入type=1的元素(可以展开的菜单)name和path
        breadcrumb?.push({ name: menu.name })
        // 先再入type=2的元素(可以点击路由的菜单)name和path
        breadcrumb?.push({ name: findMeny.name })
      }

      if (findMeny) return findMeny
    } else if (menu.type == 2 && menu.url == currentPath) {
      return menu
    }
  }
}

// 声称面包屑路径
export function pathMapToBreadcrumbs(
  userMenus: any[],
  currentPath: string
): any {
  const breadcrumb: IBreadcrumb[] = []

  pathMapToMenu(userMenus, currentPath, breadcrumb)

  return breadcrumb
}

// export function pathMapToBreadcrumbs(
//   userMenus: any[],
//   currentPath: string
// ): any {
//   const breadcrumb: IBreadcrumb[] = []

//   for (const menu of userMenus) {
//     if (menu.type == 1) {
//       const findMeny = pathMapToMenu(menu.children ?? [], currentPath)
//       // 先放入type=1的元素(可以展开的菜单)name和path
//       breadcrumb.push({ name: menu.name, path: menu.url })
//       // 先再入type=2的元素(可以点击路由的菜单)name和path
//       breadcrumb.push({ name: findMeny.name, path: findMeny.url })

//       if (findMeny) return findMeny
//     } else if (menu.type == 2 && menu.url == currentPath) {
//       return menu
//     }
//   }

//   return breadcrumb
// }

export { firstMenu }
