import axios, { AxiosInstance } from 'axios'
import { HYRequestConfig, HYRequestInterceptors } from './type'

class HYRequest {
  instance: AxiosInstance
  // 拦截器
  interceptors?: HYRequestInterceptors

  constructor(config: HYRequestConfig) {
    this.instance = axios.create(config)
    // 保存传入的拦截器
    this.interceptors = config.interceptors

    // 为创建出的实例对象添加拦截器
    // 添加请求拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    // 添加响应拦截器
    this.instance.interceptors.response.use(
      this.interceptors?.resopnseInterceptor,
      this.interceptors?.resopnseInterceptorCatch
    )

    // 为所有实例对象都添加拦截器
    this.instance.interceptors.request.use(
      (config) => {
        return config
      },
      (err) => {
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        return res
      },
      (err) => {
        return err
      }
    )
  }

  request(config: HYRequestConfig): void {
    // 执行一遍拦截器
    if (config.interceptors?.requestInterceptor) {
      config = config.interceptors.requestInterceptor(config)
    }

    this.instance.request(config).then((res) => {
      // 执行拦截器
      if (config.interceptors?.resopnseInterceptor) {
        res = config.interceptors.resopnseInterceptor(res)
      }
      console.log(res)
    })
  }
}

export default HYRequest
