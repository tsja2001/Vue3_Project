<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <el-col :span="7">
        <el-card header="分类商品数量(饼图)">
          <pie-echart :pieData="categoryGoodsCount"></pie-echart>
        </el-card>
      </el-col>
      <el-col :span="10">
        <el-card header="不同城市商品销量">
          <map-echart :mapData="addressGoodsFavor"></map-echart>
        </el-card>
      </el-col>
      <el-col :span="7">
        <el-card header="分类商品数量(玫瑰图)">
          <rose-echart :roseData="categoryGoodsCount"></rose-echart>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="content-row">
      <el-col :span="12">
        <el-card header="分类商品销量">
          <area-echart v-bind="categoryGoodsSale"></area-echart>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card header="分类商品收藏">
          <column-echart v-bind="categoryGoodsFavor"></column-echart>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue'
import { useStore } from '@/store'
import {
  PieEchart,
  RoseEchart,
  AreaEchart,
  ColumnEchart,
  MapEchart
} from '@/components/page-echarts'

export default defineComponent({
  name: 'dashboard',
  components: {
    PieEchart,
    RoseEchart,
    AreaEchart,
    ColumnEchart,
    MapEchart
  },
  setup() {
    const store = useStore()
    store.dispatch('dashboard/getDashboardDataAction', {})

    // 获取分类商品数量
    const categoryGoodsCount = computed(() => {
      return store.state.dashboard.categoryGoodsCount.map((item: any) => {
        return { name: item.name, value: item.goodsCount ?? 0 }
      })
    })

    // 获取分类商品销量
    const categoryGoodsSale = computed(() => {
      const categoryGoodsSaleData: {
        name: any[]
        value: any[]
      } = {
        name: [],
        value: []
      }

      store.state.dashboard.categoryGoodsSale.forEach((item) => {
        categoryGoodsSaleData.name.push(item.name)
        categoryGoodsSaleData.value.push(item.goodsCount ?? 0)
      })

      return categoryGoodsSaleData
    })

    // 获取分类商品收藏
    const categoryGoodsFavor = computed(() => {
      const categoryGoodsFavorData: {
        xLabels: any[]
        value: any[]
      } = {
        xLabels: [],
        value: []
      }

      store.state.dashboard.categoryGoodsFavor.forEach((item) => {
        categoryGoodsFavorData.xLabels.push(item.name)
        categoryGoodsFavorData.value.push(item.goodsFavor ?? 0)
      })

      return categoryGoodsFavorData
    })

    // 获取位置分类
    const addressGoodsFavor = computed(() => {
      const addressGoodsFavorData: any[] = []

      store.state.dashboard.addressGoodsFavor.forEach((item) => {
        addressGoodsFavorData.push({
          name: item.address,
          value: item.count ?? 0
        })
      })

      return addressGoodsFavorData
    })

    return {
      categoryGoodsCount,
      categoryGoodsSale,
      categoryGoodsFavor,
      addressGoodsFavor
    }
  }
})
</script>

<style scoped>
.content-row {
  margin-top: 20px;
}
</style>
