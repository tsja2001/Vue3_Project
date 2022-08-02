<template>
  <div class="account_login">
    <el-form
      label-width="70px"
      :rules="phonenumRules"
      :model="phoneLoginData"
      status-icon
    >
      <el-form-item label="手机号" prop="phonenum">
        <el-input
          clearable
          placeholder="请输入手机号"
          v-model="phoneLoginData.phonenum"
        ></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="num">
        <el-input
          clearable
          placeholder="请输入验证码"
          v-model="phoneLoginData.num"
        ></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import phonenumRules from './config/phonenum_reg'
export default defineComponent({
  setup() {
    const phoneLoginData = ref({
      phonenum: '',
      num: ''
    })

    const store = useStore()

    // 父组件点击登录时, 调用
    const passwordAction = () => {
      store.dispatch('login/phonenumLoginAction')
    }

    return {
      phoneLoginData,
      phonenumRules,
      passwordAction
    }
  }
})
</script>

<style scoped></style>
