export interface IFormItem {
  label: string
  rules?: any[]
  placeholder?: string
  type: 'input' | 'select' | 'password' | 'timeselect'
  selectOptions?: {
    label: string
    value: string
  }[]
  // 其他属性
  otherOptions?: any
}

export interface IForm {
  formItems: IFormItem[]
  labelWidth?: string
  itemStyle?: any
  colLayout?: any
}
