<template>
  <div class="rose-echart">
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
    roseData: {
      type: Array,
      require: true
    }
  },
  setup(props) {
    const option = computed(() => {
      return {
        // legend: {
        //   top: 'bottom'
        // },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        series: [
          {
            name: 'Nightingale Chart',
            type: 'pie',
            radius: [20, 90],
            center: ['50%', '50%'],
            roseType: 'area',
            itemStyle: {
              borderRadius: 3
            },
            data: props.roseData
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
