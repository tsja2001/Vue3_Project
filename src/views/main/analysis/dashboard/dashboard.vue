<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <el-col :span="7">
        <el-card header="芜湖111"> </el-card>
      </el-col>
      <el-col :span="10">
        <el-card header="芜湖"> </el-card>
      </el-col>
      <el-col :span="7">
        <el-card header="芜湖"></el-card>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="content-row">
      <el-col :span="12">
        <el-card header="芜湖"> </el-card>
      </el-col>
      <el-col :span="12">
        <el-card header="芜湖">
          <pie-echart :pieData="categoryGoodsCount"></pie-echart>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue'
import * as echarts from 'echarts'
import { useStore } from '@/store'
import { PieEchart } from '@/components/page-echarts'
export default defineComponent({
  name: 'dashboard',
  components: {
    PieEchart
  },
  setup() {
    const store = useStore()
    store.dispatch('dashboard/getDashboardDataAction', {})

    const categoryGoodsCount = computed(() => {
      return store.state.dashboard.categoryGoodsCount.map((item: any) => {
        return { name: item.name, value: item.goodsCount }
      })
    })
    return {
      categoryGoodsCount
    }
  }
})
</script>

<style scoped>
.content-row {
  margin-top: 20px;
}
</style>
