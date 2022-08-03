import HYRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'
import localCache from '@/utils/cache'

const hyRequest = new HYRequest({
  timeout: TIME_OUT,
  headers: {},
  baseURL: BASE_URL,
  interceptors: {
    requestInterceptor: (config: any) => {
      const token = localCache.getCache('token')
      console.log(token)
      console.log(token)
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      console.log('请求拦截成功')
      return config
    },
    requestInterceptorCatch: (err) => {
      console.log('请求拦截失败')
      return err
    },
    responseInterceptor: (res) => {
      console.log('响应拦截成功')
      return res
    },
    responseInterceptorCatch: (err) => {
      console.log('响应拦截失败')
      return err
    }
  }
})

export default hyRequest
