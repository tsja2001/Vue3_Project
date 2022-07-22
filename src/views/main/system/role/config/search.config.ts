import { IForm } from '@/base-ui/form/types'

export const searchFormConfig: IForm = {
  formItems: [
    {
      field: 'name',
      lable: '角色名称',
      rules: [],
      placeholder: '请输入角色名称',
      type: 'input'
    },
    {
      field: 'intro',
      lable: '权限介绍',
      rules: [],
      placeholder: '请输入权限介绍',
      type: 'input'
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
  labelWidth: '120px'
}
