export interface IAccount {
  name: string
  password: string
}

export interface IDatatype<U = any> {
  code: number
  data: U
}

export interface ILoginResult {
  id: number
  name: string
  token: string
}