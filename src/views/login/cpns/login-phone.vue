<template>
  <div class="loginaccount">
    <el-form :rules="rules" :model="account">
      <el-form-item label="手机号" prop="name">
        <el-input v-model="account.name"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="password">
        <div class="code">
          <el-input v-model="account.password"></el-input>
          <div class="space"></div>
          <el-button class="getButton">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
// 导入表单验证规则
import { rules } from '../config/phone-config'

export default defineComponent({
  setup() {
    // 配置表单显示的内容
    const account = reactive({
      name: '',
      password: ''
    })

    // 收到父组件传来要登录的信息
    // ...

    return {
      account,
      rules
    }
  }
})
</script>

<style scoped="less">
.code {
  display: flex;
  flex-flow: row nowrap;
}
/* .space {
  width: 10px;
} */
.getButton {
  margin-left: 15px;
}
</style>
