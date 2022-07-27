<template>
  <div class="column-echart">
    <base-echart :option="option" @onEchatInit="onEchatInit"></base-echart>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import * as echarts from 'echarts'

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
        // title: {
        // text: '特性示例：渐变色 阴影 点击缩放',
        // subtext: 'Feature Sample: Gradient Color, Shadow, Click Zoom'
        // },
        xAxis: {
          data: props.xLabels,
          axisLabel: {
            inside: true,
            color: '#fff'
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          z: 15,
          nameTextStyle: { fontSize: 10 }
        },
        yAxis: {
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: '#999'
          }
        },
        dataZoom: [
          {
            type: 'inside'
          }
        ],
        series: [
          {
            type: 'bar',
            showBackground: true,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#83bff6' },
                { offset: 0.5, color: '#188df0' },
                { offset: 1, color: '#188df0' }
              ])
            },
            emphasis: {
              itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: '#2378f7' },
                  { offset: 0.7, color: '#2378f7' },
                  { offset: 1, color: '#83bff6' }
                ])
              }
            },
            data: props.value
          }
        ]
      }
    })

    // prettier-ignore
    let dataAxis: string[] = props.xLabels as string[];
    // prettier-ignore
    let data: string[] = props.value as string[]
    let yMax = 500
    let dataShadow = []
    for (let i = 0; i < data.length; i++) {
      dataShadow.push(yMax)
    }

    const onEchatInit = (echartInstance: any) => {
      const zoomSize = 6
      echartInstance.on('click', function (params: any) {
        console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)])
        echartInstance.dispatchAction({
          type: 'dataZoom',
          startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
          endValue:
            dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
        })
      })
    }

    return {
      option,
      onEchatInit
    }
  }
})
</script>

<style scoped></style>
