<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <el-col :span="7">
        <el-card header="芜湖"></el-card>
      </el-col>
      <el-col :span="10">
        <el-card header="芜湖"></el-card>
      </el-col>
      <el-col :span="7">
        <el-card header="芜湖"></el-card>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="content-row">
      <el-col :span="12">
        <el-card header="芜湖"></el-card>
      </el-col>
      <el-col :span="12">
        <el-card header="芜湖"></el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import * as echarts from 'echarts'
import { useStore } from 'vuex'
export default defineComponent({
  name: 'dashboard',
  setup() {
    const store = useStore()
    store.dispatch('dashboard/getDashboardDataAction', {})

    return {}
  }
})
</script>

<style scoped>
.content-row {
  margin-top: 20px;
}
</style>
