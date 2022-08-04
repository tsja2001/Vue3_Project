import { RouteRecordRaw } from 'vue-router'

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
      } else if (menuItem.type === 1) {
        _recurseCetRoute(menuItem.children)
      }
    }
  }

  _recurseCetRoute(userMenus)

  return routes
}
