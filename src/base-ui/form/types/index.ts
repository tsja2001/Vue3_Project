type IFormType = 'input' | 'password' | 'select' | 'datepicker'

export interface IFormItem {
  lable: string
  rules?: any[]
  placeholder?: any
  type: IFormType
  // 针对select
  options?: {
    title: string
    value: string
  }[]
  // 针对其他的属性
  otherOptions?: any
}

export interface IForm {
  formItems: IFormItem[]
  labelWidth: string
  itemStyle: any
  colLayout: any
}
