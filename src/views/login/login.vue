<template>
  <div class="login">
    <!-- 登陆表单 -->
    <div class="login_box">
      <h2 class="title">后台管理系统</h2>
      <el-tabs class="tabs" v-model="tab">
        <el-tab-pane name="account">
          <template #label>
            <span class="custom-tabs-label">
              <el-icon><User /></el-icon>
              <span>帐号登录</span>
            </span>
          </template>
          <Account_login
            ref="accountLoginRef"
          ></Account_login>
        </el-tab-pane>
        <el-tab-pane name="phonenum">
          <template #label>
            <span class="custom-tabs-label">
              <el-icon><Iphone /></el-icon>
              <span>手机登录</span>
            </span>
          </template>
          <Phonenum_login
            ref="phonenumLoginRef"
          ></Phonenum_login>
        </el-tab-pane>
      </el-tabs>

      <!-- 记住与忘记密码 -->
      <div class="btn_box">
        <div class="left">
          <el-checkbox v-model="storePassword">
            记住密码
          </el-checkbox>
        </div>
        <div class="right">
          <el-button type="primary" link>
            忘记密码
          </el-button>
        </div>
      </div>

      <el-button
        class="button"
        type="primary"
        @click="handleLoginClick"
      >
        确认登陆
      </el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Account_login from './cpns/account_login.vue'
import Phonenum_login from './cpns/phonenum_login.vue'

export default defineComponent({
  setup() {
    // 记住密码
    const storePassword = ref(true)

    // 获取点击的第几个
    const tab = ref('account')

    // 点击登录, 调用子组件中方法
    const accountLoginRef =
      ref<InstanceType<typeof Account_login>>()
    const phonenumLoginRef =
      ref<InstanceType<typeof Phonenum_login>>()
    const handleLoginClick = () => {
      // 判断是帐号登录还是手机号登陆
      if (tab.value == 'account') {
        accountLoginRef.value?.loginAction(
          storePassword.value
        )
      } else if (tab.value == 'phonenum') {
        phonenumLoginRef.value?.passwordAction()
      }
    }

    return {
      storePassword,
      accountLoginRef,
      phonenumLoginRef,
      handleLoginClick,
      tab
    }
  },
  components: {
    Account_login,
    Phonenum_login
  }
})
</script>

<style scoped lang="less">
.login {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(../../assets/cool-background.png);
  background-size: 100% 100%;
  .login_box {
    margin-top: -100px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 5px;
    padding: 0px 20px 20px 20px;
    .title {
      color: #0f276a;
    }
    .tabs {
      width: 400px;
      .custom-tabs-label {
        text-align: center;
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
        span {
          margin-left: 10px;
        }
      }
    }
    .btn_box {
      width: 100%;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: center;
    }
    .button {
      margin-top: 20px;
      width: 100%;
    }
  }
}
</style>
