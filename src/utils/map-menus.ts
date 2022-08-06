import { useStore } from '@/store'
import { RouteRecordRaw } from 'vue-router'

let firstMenu: any = null

// 讲用户菜单, 映射到路由的数组, 添加到router中
export function pamMenusToRoutes(
  userMenus: any[]
): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []

  // 拿到所有菜单页面的vue模块的路径
  const routeFiles = require.context(
    '../router/main',
    true,
    /\.ts/
  )

  // 拿到所有菜单页面的vue模块
  const allRoutes: any[] = []
  routeFiles.keys().forEach((key) => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const route = require('../router/main' +
      key.split('.')[1])

    allRoutes.push(route)
  })

  // 根据当前用户的菜单, 获取需要添加的菜单模块
  const _recurseCetRoute = (menu: any[]) => {
    // console.log(menu)
    for (const menuItem of menu) {
      if (menuItem.type === 2) {
        const route = allRoutes.find(
          (routeItem) =>
            routeItem.default.path == menuItem.url
        )

        if (route) routes.push(route)
        if (firstMenu == null) {
          firstMenu = menuItem
        }
      } else if (menuItem.type === 1) {
        _recurseCetRoute(menuItem.children)
      }
    }
  }

  _recurseCetRoute(userMenus)

  return routes
}

// 根据当前路由, 返回对应的id
const mapUrl2Id = (url: string) => {
  const store = useStore()
  const menu = store.state.login.menu
  console.log(menu)
  let resId = 0
  const _getId = (menuItems: any[], targetMenu: string) => {
    for (const iterator of menuItems) {
      // console.log(iterator.type)
      // console.log('---')
      // console.log(iterator.type)
      if (iterator.type == 2) {
        console.log(iterator.url)
        if (iterator.url == targetMenu) {
          resId = iterator.id
          return
        }
      } else if (iterator.type == 1) {
        _getId(iterator.children, targetMenu)
      }
    }
  }

  _getId(menu, url)

  return resId
}

export { firstMenu, mapUrl2Id }
