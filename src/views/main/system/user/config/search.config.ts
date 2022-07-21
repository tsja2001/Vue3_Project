import { IForm } from '@/base-ui/form/types'

export const searchFormConfig: IForm = {
  formItems: [
    {
      field: 'id',
      lable: 'id',
      rules: [],
      placeholder: '请输入id',
      type: 'input'
    },
    {
      field: 'name',
      lable: '用户名',
      rules: [],
      placeholder: '请输入用户名',
      type: 'input'
    },
    {
      field: 'password',
      lable: '密码',
      rules: [],
      placeholder: '请输入密码',
      type: 'password'
    },
    {
      field: 'sport',
      lable: '运动',
      rules: [],
      placeholder: '请输入运动',
      type: 'select',
      options: [
        { title: '篮球', value: 'basketBall' },
        { title: '足球', value: 'football' }
      ]
    },
    {
      field: 'createTime',
      lable: '创建时间',
      rules: [],
      type: 'datepicker',
      otherOptions: {
        'start-placeholder': '请输入开始时间',
        'end-placeholder': '请输入结束时间',
        type: 'daterange'
      }
    }
  ],
  // 设置form组件中的lable(表单左侧的文字)
  labelWidth: '120px',
  // 设置form组件中每个表单的样式
  itemStyle: {
    padding: '20px 60px'
  },
  // 设置响应式布局
  colLayout: {
    xl: 6,
    lg: 8,
    md: 12
  }
}
