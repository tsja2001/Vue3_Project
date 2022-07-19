import { ILoginState } from './login/types'

// 定义一个类型, 约束state对象中的类型
export interface IRootState {
  name: string
  age: number
}

export interface IRootWithModule {
  login: ILoginState
}

// 交叉类型 => 包含两者的类型
export type IStoreType = IRootState & IRootWithModule
