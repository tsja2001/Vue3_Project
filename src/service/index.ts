// service文件的统一出口
import HYRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'

const hyRequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      console.log('请求拦截成功')
      // 携带token
      const token = 'xxx'
      if (token) {
        // config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    requestInterceptorCatch: (err) => {
      console.log('请求失败')
      return err
    },
    resopnseInterceptor: (res) => {
      console.log('响应拦截成功')
      return res
    },
    resopnseInterceptorCatch: (err) => {
      console.log('响应失败')
      return err
    }
  }
})
export default hyRequest
