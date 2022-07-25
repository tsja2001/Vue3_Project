export const modalConfig = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      lable: '用户名',
      placeholder: '请输入用户名'
    },
    {
      field: 'realname',
      lable: '真实姓名',
      placeholder: '请输入真实姓名',
      type: 'input'
    },
    {
      field: 'password',
      lable: '密码',
      placeholder: '请输入电话号码',
      type: 'password',
      // 需要在编辑时, 隐藏密码;新建时, 显示密码
      isHidden: true
    },
    {
      field: 'cellphone',
      lable: '电话号码',
      placeholder: '请输入电话号码',
      type: 'input'
    },
    {
      field: 'departmentId',
      lable: '部门',
      placeholder: '请选择部门',
      type: 'select',
      options: [
        { title: '启用', value: 1 },
        { title: '禁用', value: 0 }
      ]
    },
    {
      field: 'roleId',
      lable: '角色',
      placeholder: '请选择角色',
      type: 'select',
      options: [
        { title: '启用', value: 1 },
        { title: '禁用', value: 0 }
      ]
    }
  ],
  colLayout: {
    span: 24
  },
  itemStyle: { padding: ' 0px' },
  labelWidth: '80px'
}
