<template>
  <el-config-provider :locale="zhCn">
    <router-view></router-view>
  </el-config-provider>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElConfigProvider } from 'element-plus'
import { zhCn } from 'element-plus/lib/locale'
// import TestsMain from './views/tests/tests-main.vue'
export default defineComponent({
  components: {
    ElConfigProvider
  },
  name: 'App',
  setup() {
    return {
      zhCn
    }
  }
})
</script>

<style lang="less"></style>
