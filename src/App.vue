<template>
  <h2>{{ $store.state.name }}</h2>
  <router-link to="/login">登陆</router-link>
  <router-link to="/main">首页</router-link>
  <router-view></router-view>

  <el-button>Default</el-button>
  <el-button type="primary">Primary</el-button>
  <el-button type="success">Success</el-button>
  <el-button type="info">Info</el-button>
  <el-button type="warning">Warning</el-button>
  <el-button type="danger">Danger</el-button>
  <el-button>中文1</el-button>
  <el-input v-model="input" placeholder="Please input" />
  <!-- <el-table v-loading="loading" :data="tableData" style="width: 100%">
    <el-table-column prop="date" label="Date" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="address" label="Address" />
  </el-table> -->
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import { ElButton } from 'element-plus'
// import { ElInput } from 'element-plus'
// import 'element-plus/theme-chalk/el-button.css'
// import 'element-plus/theme-chalk/el-input.css'
// import 'element-plus/theme-chalk/base.css'

export default defineComponent({
  components: {
    // ElButton,
    // ElInput
  },
  name: 'App'
})
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
