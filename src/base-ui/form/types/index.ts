type IFormType = 'input' | 'password' | 'select' | 'datepicker'

export interface IFormItem {
  // v-modal绑定的字段
  field: string
  // 表单左侧显示的内容
  lable: string
  // 匹配规则
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
