<template>
  <div class="pie-echart">
    <base-echart :option="option"></base-echart>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

import BaseEchart from '@/base-ui/echart'
export default defineComponent({
  components: {
    BaseEchart
  },
  props: {
    xLabels: {
      type: Array,
      require: true
    },
    value: {
      type: Array,
      require: true
    }
  },
  setup(props) {
    const option = computed(() => {
      return {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        // 折线图距离边缘的距离
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          // 计算时是否包含文本
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: props.xLabels
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: props.value
          }
        ]
      }
    })
    return {
      option
    }
  }
})
</script>

<style scoped></style>
