import { FormRules } from 'element-plus'
import { reactive } from 'vue'

// 账号登陆验证
const accountRules = reactive<FormRules>({
  name: [
    {
      required: true,
      message: '请输入用户名',
      trigger: 'blur'
    },
    {
      min: 3,
      max: 15,
      message: '用户名长度为3-15位',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'blur'
    },
    {
      min: 3,
      max: 15,
      message: '密码长度为3-15位',
      trigger: 'blur'
    }
  ]
})

export default accountRules
