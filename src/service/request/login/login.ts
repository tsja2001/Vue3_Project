import hyRequest from '@/service'
import { IAccount, IDatatype, ILoginResult } from './types'

enum LoginApi {
  login = '/login'
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const accountLoginRequest = (account: IAccount) => {
  return hyRequest.post<IDatatype<ILoginResult>>({
    url: LoginApi.login,
    data: account
  })
}
