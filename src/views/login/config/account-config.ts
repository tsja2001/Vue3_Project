// 配置表单验证规则
export const rules = {
  name: [
    {
      // 是否必传
      required: true,
      // 验证错误时的提示
      message: '用户名必传',
      // 何时验证 => 失去焦点时验证
      trigger: 'blur'
    },
    {
      // 匹配的正则
      pattern: /^[a-zA-Z0-9]{5,10}$/,
      // 验证错误时的提示
      message: '请输入字母或数字5-10位',
      // 何时验证 => 失去焦点时验证
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '密码必传',
      trigger: 'blur'
    },
    {
      pattern: /^[a-zA-Z0-9]{5,}$/,
      message: '请输入字母或数字5位以上',
      trigger: 'blur'
    }
  ]
}
