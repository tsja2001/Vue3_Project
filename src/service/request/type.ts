import { AxiosRequestConfig, AxiosResponse } from 'axios'

// 自定义拦截器类型
export interface HYRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (err: any) => any
  // resopnseInterceptor?: (config: T) => T
  resopnseInterceptor?: (config: any) => any
  resopnseInterceptorCatch?: (err: any) => any
}

// 自定义一个请求参数类型, 来代替axios自带的AxiosRequestConfig, 在其中增加拦截器
export interface HYRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: HYRequestInterceptors<T>
  showLoding?: boolean
}
