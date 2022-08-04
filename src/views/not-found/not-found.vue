<template>
  <div class="not-found">
    <el-empty description="NotFound">
      <el-button type="primary" @click="handleBtnClick">
        返回上一级
      </el-button>
    </el-empty>
  </div>
</template>

<script lang="ts">
// import router from '@/router'
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const handleBtnClick = () => {
      history.go(-1)
    }
    return {
      handleBtnClick
    }
  }
})
</script>

<style scoped></style>
