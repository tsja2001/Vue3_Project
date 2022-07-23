import { IForm } from '@/base-ui/form/types'

export const searchFormConfig: IForm = {
  formItems: [
    {
      field: 'name',
      lable: '用户名',
      placeholder: '请输入用户名',
      type: 'input'
    },
    {
      field: 'realname',
      lable: '真实姓名',
      placeholder: '请输入真实姓名',
      type: 'input'
    },
    {
      field: 'cellphone',
      lable: '电话号码',
      placeholder: '请输入电话号码',
      type: 'input'
    },
    {
      field: 'enable',
      lable: '用户状态',
      placeholder: '请输入选择用户状态',
      type: 'select',
      options: [
        { title: '启用', value: 1 },
        { title: '禁用', value: 0 }
      ]
    },
    {
      field: 'createAt',
      lable: '创建时间',
      type: 'datepicker',
      otherOptions: {
        'start-placeholder': '开始时间',
        'end-placeholder': '结束时间',
        type: 'daterange'
      }
    }
  ],
  // 设置form组件中的lable(表单左侧的文字)
  labelWidth: '100px',
  // 设置form组件中每个表单的样式
  itemStyle: {
    padding: '20px 20px'
  },
  // 设置响应式布局
  colLayout: {
    xl: 6,
    lg: 8,
    md: 12
  }
}
