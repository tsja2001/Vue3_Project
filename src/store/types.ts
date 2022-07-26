import { ILoginState } from './login/types'
import { ISystemState } from './main/system/types'

// 定义一个类型, 约束state对象中的类型
export interface IRootState {
  name: string
  age: number
  entrieDepartment: any[]
  entrieRole: any[]
  entrieMenu: any[]
}

export interface IRootWithModule {
  login: ILoginState
  system: ISystemState
}

// 交叉类型 => 包含两者的类型
export type IStoreType = IRootState & IRootWithModule
