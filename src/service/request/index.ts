import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { HYRequestConfig, HYRequestInterceptors } from './type'

class HYRequest {
  instance: AxiosInstance
  // 拦截器
  interceptors?: HYRequestInterceptors

  constructor(config: HYRequestConfig) {
    this.instance = axios.create(config)
    // 保存传入的拦截器
    this.interceptors = config.interceptors
    // 使用请求拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    // 使用响应拦截器
    this.instance.interceptors.response.use(
      this.interceptors?.resopnseInterceptor,
      this.interceptors?.resopnseInterceptorCatch
    )
  }

  request(config: AxiosRequestConfig): void {
    this.instance.request(config).then((res) => {
      console.log(res)
    })
  }
}

export default HYRequest
