import hyRequest from '@/service'
import { IAccount, IDatatype, ILoginResult } from './types'

enum LoginApi {
  login = '/login',
  LoginUserInfo = '/users/',
  UserMenus = '/role/' // 用法 role/1/menu
}

// 帐号登录
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const accountLoginRequest = (account: IAccount) => {
  return hyRequest.post<IDatatype<ILoginResult>>({
    url: LoginApi.login,
    data: account
  })
}

// 请求用户信息
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function requestUserInfoById(id: number) {
  return hyRequest.get<IDatatype>({
    url: LoginApi.LoginUserInfo + id
  })
}

// 根据用户id请求菜单
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function requestUserMenuById(id: number) {
  return hyRequest.get<IDatatype>({
    url: `${LoginApi.UserMenus}${id}/menu`
  })
}
