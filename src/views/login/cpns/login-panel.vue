<template>
  <div class="login-panel">
    <h1 class="title">管理系统</h1>
    <el-tabs type="border-card" class="demo-tabs" stretch>
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><calendar /></el-icon>
            <span>账号登录</span>
          </span>
        </template>
        <login-account-vue ref="loginInRef"></login-account-vue>
      </el-tab-pane>

      <el-tab-pane label="Config">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><Cellphone /></el-icon>
            <span>手机登录</span>
          </span>
        </template>
        <login-phone-vue></login-phone-vue>
      </el-tab-pane>
    </el-tabs>
    <div class="btm-btns">
      <el-checkbox size="large" v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button @click="handleLoginClick" type="primary" class="login-btn"
      >立即登陆</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import loginAccountVue from './login-account.vue'
import loginPhoneVue from './login-phone.vue'
export default defineComponent({
  components: {
    loginAccountVue,
    loginPhoneVue
  },
  setup() {
    const loginInRef = ref<InstanceType<typeof loginAccountVue>>()
    // 点击登录
    const handleLoginClick = () => {
      loginInRef.value?.loginAccount(isKeepPassword.value)
    }

    const isKeepPassword = ref(true)

    return { isKeepPassword, handleLoginClick, loginInRef }
  }
})
</script>

<style scoped="less">
.login-panel {
  margin-top: -200px;
}
.btm-btns {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.login-btn {
  width: 100%;
}
</style>
