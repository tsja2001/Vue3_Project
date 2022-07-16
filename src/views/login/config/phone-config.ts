// 配置表单验证规则
export const rules = {
  name: [
    {
      // 是否必传
      required: true,
      // 验证错误时的提示
      message: '手机号必传',
      // 何时验证 => 失去焦点时验证
      trigger: 'blur'
    },
    {
      // 匹配的正则
      pattern: /^[0-9]{11}$/,
      // 验证错误时的提示
      message: '请输入正确手机号',
      // 何时验证 => 失去焦点时验证
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '验证码必传',
      trigger: 'blur'
    },
    {
      pattern: /^[0-9]{6}$/,
      message: '请输入正确验证码',
      trigger: 'blur'
    }
  ]
}
