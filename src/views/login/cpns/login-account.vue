<template>
  <div class="loginaccount">
    <el-form :rules="rules" :model="account" ref="formRef">
      <el-form-item label="姓名" prop="name">
        <el-input v-model="account.name" placeholder="请输入姓名"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          v-model="account.password"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { ElForm } from 'element-plus'
import { defineComponent, reactive, ref } from 'vue'
// 导入表单验证规则
import { rules } from '../config/account-config'
// 导入本地缓存工具, 存储用户名密码
import loaclCache from '@/utils/caches'

import { useStore } from 'vuex'
export default defineComponent({
  setup() {
    const store = useStore()

    // 配置表单显示的内容
    const account = reactive({
      name: loaclCache.getCache('name') ?? '',
      password: loaclCache.getCache('password') ?? ''
    })

    //
    const formRef = ref<InstanceType<typeof ElForm>>()

    // 收到父组件传来要登录的信息
    const loginAccount = (isKeepPassword: boolean) => {
      // 来获取表单验证是否通过
      formRef.value?.validate((valid) => {
        if (valid) {
          // 1. 判断是否要记住密码
          if (isKeepPassword) {
            // 本地缓存账号密码
            loaclCache.setCache('name', account.name)
            loaclCache.setCache('password', account.password)
          } else {
            // 未选中, 清除缓存的密码
            loaclCache.deleteCache('name')
            loaclCache.deleteCache('password')
          }
          // 2. 开始进行登录验证
          store.dispatch('login/accountLoginAction', { ...account })
        }
      })
    }

    return {
      account,
      rules,
      loginAccount,
      formRef
    }
  }
})
</script>

<style scoped></style>
