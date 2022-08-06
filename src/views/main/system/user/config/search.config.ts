import { IForm } from '@/base-ui/form'

const formConfig: IForm = {
  formItems: [
    {
      type: 'input',
      label: '姓名',
      placeholder: '请输入姓名'
    },
    {
      type: 'password',
      label: '密码',
      placeholder: '请输入密码'
    },
    {
      type: 'select',
      label: '运动',
      placeholder: '请选择喜欢的运动',
      selectOptions: [
        {
          label: '🏀',
          value: '篮球'
        },
        {
          label: '⚽️',
          value: '足球'
        }
      ]
    },
    {
      type: 'timeselect',
      label: '时间',
      placeholder: '请选择时间',
      otherOptions: {
        type: 'daterange',
        'start-placeholder': '开始时间',
        'end-placeholder': '结束时间'
      }
    }
  ],
  labelWidth: '70px',
  colLayout: {
    span: 8
  }
}

// module.exports = {
//   formConfig
// }
export default formConfig
