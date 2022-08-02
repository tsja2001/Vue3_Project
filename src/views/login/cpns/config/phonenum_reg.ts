import { FormRules } from 'element-plus'
import { reactive } from 'vue'

// 账号登陆验证
const phonenumRules = reactive<FormRules>({
  phonenum: [
    {
      required: true,
      message: '请输入手机号',
      trigger: 'blur'
    },
    {
      max: 11,
      min: 11,
      message: '请输入正确手机号',
      trigger: 'blur'
    }
  ],
  num: [
    {
      required: true,
      message: '请输入验证',
      trigger: 'blur'
    },
    {
      max: 11,
      min: 11,
      message: '密码长度为6位',
      trigger: 'blur'
    }
  ]
})

export default phonenumRules
