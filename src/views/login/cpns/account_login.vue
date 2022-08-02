<template>
  <div class="account_login">
    <el-form
      label-width="70px"
      :rules="accountRules"
      :model="loginData"
      status-icon
      ref="formRef"
    >
      <el-form-item label="用户名" prop="name">
        <el-input
          clearable
          placeholder="请输入用户名"
          v-model="loginData.name"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          clearable
          type="password"
          placeholder="请输入密码"
          v-model="loginData.password"
          show-password
        ></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { ElForm } from 'element-plus'
import { defineComponent, ref } from 'vue'
import accountRules from './config/account_reg'
import LocalCache from '@/utils/cache'
import { useStore } from 'vuex'
export default defineComponent({
  setup() {
    const loginData = ref({
      name: LocalCache.getCache('userName') ?? '',
      password: LocalCache.getCache('password') ?? ''
    })

    const store = useStore()

    const formRef = ref<InstanceType<typeof ElForm>>()

    // 此方法会被父组件点击登陆时调用
    const loginAction = (storePassword: boolean) => {
      // 使用组件的ref.validate方法获取验证状态
      formRef.value?.validate((valid) => {
        // 规则验证通过
        if (valid) {
          // 记住密码
          if (storePassword) {
            LocalCache.setCache(
              'userName',
              loginData.value.name
            )
            LocalCache.setCache(
              'password',
              loginData.value.password
            )
          }

          // 执行vuex中的登陆流程
          // store.dispatch('login/accountLoginAction', {
          //   ...loginData
          // })
          store.dispatch('login/accountLoginAction', {})
        }
      })
    }

    return {
      loginData,
      accountRules,
      loginAction,
      formRef
    }
  }
})
</script>

<style scoped></style>
